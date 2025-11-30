import express from 'express';
import { createTask, getTask, getTasks, modifyTask } from '../controllers/task.controller.js';
import { verifyRol } from '../middlewares/verify.rol.middleware.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createTaskSchema } from '../schemas/task.schema.js';
import { updateTaskSchema } from '../schemas/task.schema.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const taskRouter = express.Router();

taskRouter.get('/', verifyToken, getTasks);
taskRouter.get('/:id', verifyToken, getTask);
taskRouter.post('/',  verifyToken, verifyRol, validateSchema(createTaskSchema), createTask);
taskRouter.put('/:id', verifyToken, verifyRol, validateSchema(updateTaskSchema), modifyTask);

export default taskRouter;