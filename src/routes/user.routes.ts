import { Router } from "express";
import getUserController from "../controllers/getUser.controller";
import getUsersController from "../controllers/getUsers.controller";
import userCreateController from "../controllers/userCreate.controller";
import userLoginController from "../controllers/userLogin.controllers";

const routes = Router();

routes.post("", userCreateController);
routes.post("/login", userLoginController);
routes.get("", getUsersController);
routes.get("/:id", getUserController);
routes.patch("/:id");
routes.delete("/:id");

export default routes;
