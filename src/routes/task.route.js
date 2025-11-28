import express from 'express';
import { createTask, getTask, getTasks, modifyTask } from '../controllers/task.controller.js';

const taskRouter = express.Router();

taskRouter.get('/', getTasks);
taskRouter.get('/:id', getTask);
taskRouter.post('/', createTask);
taskRouter.put('/:id', modifyTask);

export default taskRouter;