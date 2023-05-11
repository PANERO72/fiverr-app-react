import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js"; 

export const createOrder = async (req, res, next) => {
  try {

    const gig = await Gig.findById(req.params.gigId);

    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      desc: gig.desc,
      price: gig.price,
      sellerId: gig.userId,
      buyerId: req.userId,
      payment_intent: "temporary",
    });

    await newOrder.save();

    res.status(200).send(
      "¡Éxito!"
    );
  } catch (error) {
    next(error);
  }
 
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);
  } catch (error) {
    next(error);
  }
};

export const confirm = async (req, res, next) => {
  try {
    const orders = await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};