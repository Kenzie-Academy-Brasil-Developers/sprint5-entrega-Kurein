import { Request, Response } from "express";
import userCreateService from "../services/userCreate.services";

const userCreateController = async (req: Request, res: Response) => {
  const { name, email, password, age, isAdm } = req.body;

  const newUser = await userCreateService({
    name,
    email,
    password,
    age,
    isAdm,
  });

  if (newUser === "email") {
    return res.status(409).json({ error: "Email already exists" });
  }
  if (newUser === "age") {
    return res.status(403).json({ error: "Must be of legal age" });
  }

  return res.status(201).send(newUser);
};

export default userCreateController;
