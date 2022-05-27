import { Router } from "express";

import deleteUserController from "../controllers/deleteUser.controller";
import getUserController from "../controllers/getUser.controller";
import getUsersController from "../controllers/getUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import userCreateController from "../controllers/userCreate.controller";
import userLoginController from "../controllers/userLogin.controllers";

import { authUser } from "../middlewares/authUser.middleware";

const routes = Router();

routes.post("", userCreateController);
routes.post("/login", userLoginController);
routes.get("", getUsersController);
routes.get("/:id", getUserController);
routes.patch("/:id", authUser, updateUserController);
routes.delete("/:id", authUser, deleteUserController);

export default routes;
