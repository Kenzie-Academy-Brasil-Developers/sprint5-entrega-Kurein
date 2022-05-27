import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const getUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  return users.find((user) => user.uuid === id);
};

export default getUserService;
