import { Request, Response } from "express";
import userLoginService from "../services/userLogin.services";

const userLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await userLoginService({ email, password });

  if (token === "user") {
    return res.status(404).json({ error: "Email or Password incorrect" });
  }

  return res.status(200).json({ token: token });
};

export default userLoginController;
