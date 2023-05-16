import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let langMessage1, langMessage2, langMessage3, langMessage4, langMessage5, langMessage6;

export const register = async (req, res, next) => {
  try {

    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
       ...req.body, password: hash,
    });

    if(newUser.flag === "ca"){
        langMessage1 = "L'usuari ha estat creat!";
        langMessage2 = "Manca completar els camps.";
        langMessage3 = "L'usuari ja existeix!";
    }else if(newUser.flag === "de"){
        langMessage1 = "Benutzer wurde erstellt!";
        langMessage2 = "Sie müssen die Felder ausfüllen.";
        langMessage3 = "Benutzer existiert bereits!";
    }else if(newUser.flag === "en"){
        langMessage1 = "User has been created!";
        langMessage2 = "You need to fill in the fields.";
        langMessage3 = "User already exists!";
    }else if(newUser.flag === "es"){
        langMessage1 = "¡El usuario ha sido creado!";
        langMessage2 = "Falta completar los campos.";
        langMessage3 = "El usuario ya existe!";
    }else{
        langMessage1 = "User has been created!";
        langMessage2 = "You need to fill in the fields.";
        langMessage3 = "User already exists!";
    }

    await newUser.save();
      // res.status(201).send("User has been created.");
      // res.status(201).send(langMessage1);
    return next(createError(201, langMessage1));

  } catch (err) {
    // next(err);
    res.status(500).json(err);

  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if(user.flag === "ca"){
      langMessage4 = "No s'ha trobat l'usuari!";
      langMessage5 = "Contrasenya o nom d'usuari incorrectes!";
   }else if(user.flag === "de"){
      langMessage4 = "Benutzer nicht gefunden!";
      langMessage5 = "Kennwort oder Benutzername falsch!";
   }else if(user.flag === "en"){
      langMessage4 = "User not found!";
      langMessage5 = "Wrong password or username!";
    }else if(user.flag === "es"){
       langMessage4 = "¡No se encontró el usuario!";
       langMessage5 = "¡Contraseña o nombre de usuario incorrectos!";
    }else{
      langMessage4 = "User not found!";
      langMessage5 = "Wrong password or username!";
    }

    // if (!user) return next(createError(404, "User not found!"));
    if (!user) return next(createError(404, langMessage4));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect){
      // return next(createError(400, "Wrong password or username!"));
      return next(createError(400, langMessage5));
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
    langMessage6 = "S'ha tancat la sessió de l'usuari.";
 }else if(usuario.flag === "de"){
    langMessage6 = "Benutzer wurde abgemeldet.";
 }else if(usuario.flag === "en"){;
    langMessage6 = "User has been logged out.";
  }else if(usuario.flag === "es"){
     langMessage6 = "Se ha cerrado la sesión del usuario.";
  }else{
    langMessage6 = "User has been logged out.";
  }

  res.clearCookie("accessToken", { 
      sameSite: "none",
      secure: true,
    }).status(200).send(langMessage6); /** "User has been logged out."*/
};