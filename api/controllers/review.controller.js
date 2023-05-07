import createError from "../utils/createError.js";
import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";

export const createReview = async (req, res, next) => {
  let langMessage1, langMessage2;
  if(req.flag === "ca"){
    langMessage1 = "Els venedors no poden crear cap ressenya!";
    langMessage2 = "Vostè ja ha creat una ressenya per a aquest servei!";

  }else if(req.flag === "de"){
    langMessage1 = "Verkäufer können keine Rezension erstellen!";
    langMessage2 = "Sie haben bereits eine Rezension für diesen Service erstellt!";

  }else if(req.flag === "en"){
    langMessage1 = "Sellers can't create a review!";
    langMessage2 = "You have already created a review for this gig!";

  }else if(req.flag === "es"){
     langMessage1 = "¡Los vendedores no pueden crear una reseña!";
     langMessage2 = "¡Usted ya ha creado una reseña para este servicio!";
  }else{
     langMessage1 = "Sellers can't create a review!";
     langMessage2 = "You have already created a review for this gig!";

  }

  if (req.isSeller){

    // return next(createError(403, "Sellers can't create a review!"));
    return next(createError(403, langMessage1));
  }

  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });

    if (review){
      return next(
        // createError(403, "You have already created a review for this gig!")
        createError(403, langMessage2)
      );
    }

    //TODO: check if the user purchased the gig.

    const savedReview = await newReview.save();

    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ gigId: req.params.gigId });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};
export const deleteReview = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};