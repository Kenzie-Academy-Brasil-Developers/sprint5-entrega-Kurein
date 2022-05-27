import { Request, Response } from "express";
import getUsersService from "../services/getUsers.services";

const getUsersController = async (req: Request, res: Response) => {
  const users = await getUsersService();

  return res.status(200).json(users);
};

export default getUsersController;
