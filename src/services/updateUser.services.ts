import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserUpdate } from "../interfaces/user.interfaces";

const updateUserService = async ({
  userEmail,
  name,
  email,
  password,
  age,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const user = users.find((user) => user.email === userEmail);

  if (!user) {
    return "user";
  }

  if (password) {
    return "password";
  }

  const updatedUser = {
    name: name || user.name,
    email: email || user.email,
    age: age || user.age,
    updated_at: new Date(),
  };

  await userRepository.update(user!.uuid, updatedUser);

  return true;
};

export default updateUserService;
