import jwt from "jsonwebtoken";
import config from "../config/config.js";
import UsersManager from "../dao/dbManagers/users.js";
import { isValidPassword } from "../utils.js";

const insUser = new UsersManager();

export const changePassword = async (req, res, next) => {
  req.logger.debug("EMPIEZA EL RECOVERPASSWORD");

  let token = req.body.token;
  let password = req.body.password;

  if (password.trim() == 0)
    return res.send({
      status: "error",
      error: "La contraseña no puede estar vacia",
    });

  let result;

  console.log("Verificacion");
  jwt.verify(token, config.tokenRestore, function (error, decoded) {
    req.logger.debug("El token es");
    console.log(token);
    console.log(error);
    if (error) {
      if (error instanceof jwt.TokenExpiredError) {
        result = "EXPIRED";
        req.logger.debug("Expiro");
      }
    } else {
      req.logger.debug("No expiro");
      console.log(decoded);
      result = decoded;
    }
  });

  if (result == "EXPIRED")
    return res.send({ status: "error", message: "El token expiro" });

  let email = result.email;

  let account = await insUser.getOne(null, email);

  if (!account)
    return res.send({ status: "error", message: "La cuenta ya no existe" });

  if (isValidPassword(account, password))
    return res.send({ status: "error", message: "La contraseña es la misma" });

  req.account = account;
  req.password = password;

  next();
};
