import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";
import User from '../models/user.model.js';

let langMessage1, langMessage2, langMessage3, langMessage4, langMessage5;

export const createGig = async (req, res, next) => {

  // const usuario = await User.findOne({ flag: req.body.flag });
  if (!req.isSeller){
    if(req.flag === "ca"){
      langMessage1 = "Només els venedors poden crear un servei!";
    }else if(req.flag === "de"){
        langMessage1 = "Nur Verkäufer können einen Dienstleistungen erstellen!";
    }else if(req.flag === "en"){
        langMessage1 = "Only sellers can create a gig!";
        
    }else if(req.flag === "es"){
        langMessage1 = "¡Solo tú puedes eliminar tu servicio!";
        
    }else{
        langMessage1 = "Only sellers can create a gig!";
        
    }
    // return next(createError(403, "Only sellers can create a gig!"));
    return next(createError(403, langMessage1));
  }

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};
export const deleteGig = async (req, res, next) => {
  // const usuario = await User.findOne({ flag: req.body.flag });
  try {
    if(req.flag === "ca"){
      langMessage2 = "Només tu pots esborrar el teu servei!";
      langMessage3 = "El servei s'ha elimat!";
    }else if(req.flag === "de"){
        langMessage2 = "Nur du kannst deinen Dienstleistungen löschen!";
        langMessage3 = "Dienstleistungen wurde gelöscht!";
    }else if(req.flag === "en"){
        langMessage2 = "Only you can delete your gig!";
        langMessage3 = "Gig has been deleted!";
    }else if(req.flag === "es"){
        langMessage2 = "¡Solo tú puedes eliminar tu servicio!";
        langMessage3 = "¡El servicio ha sido eliminado!";
    }else{
        langMessage2 = "Only you can delete your gig!";
        langMessage3 = "Gig has been deleted!";
    }
    const gig = await Gig.findById(req.params.id);
    if (gig.userId !== req.userId){
      // return next(createError(403, "You can delete only your gig!"));
      return next(createError(403, langMessage2));
    }

    await Gig.findByIdAndDelete(req.params.id);
    // res.status(200).send("Gig has been deleted!");
    res.status(200).send(langMessage3);
  } catch (err) {
    next(err);
  }
};

export const getGig = async (req, res, next) => {
  // const usuario = await User.findOne({ flag: req.body.flag });
  try {
    if(req.flag === "ca"){
      
      langMessage4 = "No s'ha trobat el servei!";
    }else if(req.flag === "de"){
        
        langMessage4 = "Dienstleistungen nicht gefunden!";
    }else if(req.flag === "en"){
        
        langMessage4 = "Gig not found!";
    }else if(req.flag === "es"){
        
        langMessage4 = "¡No se encontró el servicio!";
    }else{
        
        langMessage4 = "Gig not found!";
    }
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      // next(createError(404, "Gig not found!"));
      next(createError(404, langMessage4));
    }
    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};
export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
   
  };
  try {
    const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
};