import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const deletedUser = users.find((user) => user.uuid === id);

  if (!deletedUser) {
    return false;
  }

  const deletedData = await userRepository.delete(deletedUser!.uuid);

  return true;
};

export default deleteUserService;
