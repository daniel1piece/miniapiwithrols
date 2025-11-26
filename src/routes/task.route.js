import express from 'express';
import { createTask, getTask, getTasks, modifyTask } from '../controllers/task.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const taskRouter = express.Router();

taskRouter.get('/', verifyToken,getTasks);
taskRouter.get('/:id', getTask);
taskRouter.post('/', createTask);
taskRouter.put('/:id', modifyTask);

export default taskRouter;