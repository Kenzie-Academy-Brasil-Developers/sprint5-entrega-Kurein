import { Request, Response } from "express";
import updateUserService from "../services/updateUser.services";

const updateUserController = async (req: Request, res: Response) => {
  const userEmail = req.userEmail;
  const { name, email, password, age } = req.body;

  const updatedUser = await updateUserService({
    userEmail,
    name,
    email,
    password,
    age,
  });

  if (updatedUser === "user") {
    return res.status(404).json({ error: "User not found" });
  }

  if (updatedUser === "password") {
    return res.status(403).json({ error: "Cannot change password" });
  }

  return res.status(200).json({ message: "User Updated" });
};

export default updateUserController;
