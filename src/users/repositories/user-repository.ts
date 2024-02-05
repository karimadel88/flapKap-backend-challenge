import Repository from "app/general/repository/repository";
import User from "../model/user";

class UserRepository extends Repository {
  //
}

const userRepository = new UserRepository(User);
export default userRepository;
