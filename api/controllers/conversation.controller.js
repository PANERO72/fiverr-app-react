import createError from "../utils/createError.js";
import Conversation from "../models/conversation.model.js";

let langMessage1, langMessage2, langMessage3, langMessage4, langMessage5;

export const createConversation = async (req, res, next) => {
  const newConversation = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readBySeller: req.isSeller,
    readByBuyer: !req.isSeller,
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(201).send(savedConversation);
  } catch (err) {
    next(err);
  }
};

export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          // readBySeller: true,
          // readByBuyer: true,
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );

    res.status(200).send(updatedConversation);
  } catch (err) {
    next(err);
  }
};

export const getSingleConversation = async (req, res, next) => {
  if (req.flag === "cat") {
    langMessage1 = "No he trobat la conversa!";
  } else if(req.flag === "de") {
    langMessage1 = "Konversation nicht gefunden!";
  } else if(req.flag === "en") {
    langMessage1 = "Not found conversation!";
  } else if(req.flag === "es") {
    langMessage1 = "¡No se encontró la conversación!";
  }else {
    langMessage1 = "Not found conversation!";
  }
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    // if (!conversation) return next(createError(404, "Not found!"));
    if (!conversation) return next(createError(404, langMessage1));
    res.status(200).send(conversation);
  } catch (err) {
    next(err);
  }
};

export const getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    ).sort({ updatedAt: -1 });
    res.status(200).send(conversations);
  } catch (err) {
    next(err);
  }
};