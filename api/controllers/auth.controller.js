import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let langMessage1, langMessage2, langMessage3, langMessage4, langMessage5;

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    if(newUser.flag === "ca"){
        langMessage1 = "L'usuari ha estat creat!";
      
    }else if(newUser.flag === "de"){
        langMessage1 = "Benutzer wurde erstellt!";
      
    }else if(newUser.flag === "en"){
        langMessage1 = "User has been created!";
    }else if(newUser.flag === "es"){
        langMessage1 = "¡El usuario ha sido creado!";
    }else{
        langMessage1 = "User has been created!";
    }
    await newUser.save();
    // res.status(201).send("User has been created.");
    res.status(201).send(langMessage1);
  } catch (err) {
    next(err);

  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if(user.flag === "ca"){
      langMessage2 = "No s'ha trobat l'usuari!";
      langMessage3 = "Contrasenya o nom d'usuari incorrectes!";
   }else if(user.flag === "de"){
      langMessage2 = "Benutzer nicht gefunden!";
      langMessage3 = "Kennwort oder Benutzername falsch!";
   }else if(user.flag === "en"){
      langMessage2 = "User not found!";
      langMessage3 = "Wrong password or username!";
    }else if(user.flag === "es"){
       langMessage2 = "¡No se encontró el usuario!";
       langMessage3 = "¡Contraseña o nombre de usuario incorrectos!";
    }else{
      langMessage2 = "User not found!";
      langMessage3 = "Wrong password or username!";
    }

    // if (!user) return next(createError(404, "User not found!"));
    if (!user) return next(createError(404, langMessage2));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect){
      // return next(createError(400, "Wrong password or username!"));
      return next(createError(400, langMessage3));
    }

    const token = jwt.sign({
        id: user._id,
        isSeller: user.isSeller,
      }, process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;

    res.cookie("accessToken", token, { 
      httpOnly: true,
    }).status(200).send(info);

  } catch (err) {
    next(err + 'Error');
  }
};

export const logout = async (req, res) => {

  const usuario = new User();

  if(usuario.flag === "ca"){
    langMessage4 = "S'ha tancat la sessió de l'usuari.";
 }else if(usuario.flag === "de"){
    langMessage4 = "Benutzer wurde abgemeldet.";
 }else if(usuario.flag === "en"){;
    langMessage4 = "User has been logged out.";
  }else if(usuario.flag === "es"){
     langMessage4 = "Se ha cerrado la sesión del usuario.";
  }else{
    langMessage4 = "User has been logged out.";
  }

  res.clearCookie("accessToken", { 
      sameSite: "none",
      secure: true,
    }).status(200).send(langMessage4); /** "User has been logged out."*/
};