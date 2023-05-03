import User from "../models/user.model.js";
import createError from "../utils/createError.js";

// import { Language } from "../data/dummyDataLang.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  let langMessage1, langMessage2, langMessage3, langMessage4, langMessage5;

  if(user){

    if(user.flag === "ca"){
       langMessage1 = "Només pots esborrar el teu compte!";
       langMessage2 = "Heu eliminat el vostre compte!";
       langMessage3 = "L'usuari ja ha estat eliminat!";
    }else if(user.flag === "de"){
       langMessage1 = "Sie können nur Ihr Konto löschen!";
       langMessage2 = "Sie haben Ihr Konto gelöscht!";
       langMessage3 = "Benutzer wurde bereits entfernt!";
    }else if(user.flag === "en"){
       langMessage1 = "You can delete only your account!";
       langMessage2 = "You have deleted your account!";
       langMessage3 = "User has already been removed!";
     }else if(user.flag === "es"){
        langMessage1 = "¡Solo puedes borrar tu cuenta!";
        langMessage2 = "¡Has eliminado tu cuenta!";
        langMessage3 = "¡El usuario ya ha sido eliminado!";
     }

    if (req.userId !== user._id.toString()) {
      // return next(createError(403, "You can delete only your account!"));
      return next(createError(403, langMessage1));
    }else{
       await User.findByIdAndDelete(req.params.id);
      //  res.status(200).send("deleted.");
       res.status(200).send(langMessage2);
    }
  }else{
    // res.status(200).send("User has already been removed!");
    res.status(200).send(langMessage3);
  }

 
};
export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};