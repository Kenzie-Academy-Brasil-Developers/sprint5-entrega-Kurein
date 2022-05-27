import { Request, Response } from "express";
import getUserService from "../services/getUser.services";

const getUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await getUserService(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(user);
};

export default getUserController;
