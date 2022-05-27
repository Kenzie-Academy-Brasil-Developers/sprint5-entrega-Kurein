import { IUserLogin } from "../interfaces/user.interfaces";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const loggedUser = users.find((user) => user.email === email);

  if (!loggedUser) {
    return "user";
  }

  const validation = bcrypt.compareSync(password, loggedUser.password);

  if (!validation) {
    return "user";
  }

  const token = jwt.sign(
    { email: email, id: loggedUser.uuid, isAdm: loggedUser.isAdm },
    String(process.env.JWT_SECRET),
    { expiresIn: "24h" }
  );

  return token;
};

export default userLoginService;
