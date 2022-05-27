import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser.services";

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletionProcess = deleteUserService(id);

  if (!deletionProcess) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(204).send();
};

export default deleteUserController;
