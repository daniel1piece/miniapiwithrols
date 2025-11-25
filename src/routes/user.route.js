import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createUserSchema } from '../schemas/user.schema.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', validateSchema(createUserSchema),createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;