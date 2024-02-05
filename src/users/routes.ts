import { Router } from "express";
import userController from "./controllers/user-controller";
import userRepository from "./repositories/user-repository";
const userRouter = Router();

userRouter.post("/", userController.create.bind(userController));
userRouter.get("/", userController.getAll.bind(userController));
userRouter.get("/:id", userController.getById.bind(userController));
userRouter.put("/:id", userController.update.bind(userController));
userRouter.delete("/:id", userController.delete.bind(userController));

export default userRouter;
