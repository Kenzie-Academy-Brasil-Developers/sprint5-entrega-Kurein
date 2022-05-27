import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserCreate } from "../interfaces/user.interfaces";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const userCreateService = async ({
  name,
  email,
  password,
  age,
  isAdm = false,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailConflict = users.find((user) => user.email === email);

  if (emailConflict) {
    return "email";
  }
  if (age > 18) {
    return "age";
  }

  const date = new Date();

  const user = new User();
  user.uuid = uuidv4();
  user.email = email;
  user.name = name;
  user.age = age;
  user.password = bcrypt.hashSync(password, 8);
  user.isAdm = isAdm;
  user.created_at = date;
  user.updated_at = date;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
