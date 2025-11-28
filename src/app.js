import express from 'express';

import userRouter from './routes/user.route.js';
import taskRouter from './routes/task.route.js';
import authRouter from './routes/auth.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/users/', userRouter);
app.use('/api/v1/tasks/', taskRouter);
app.use('/api/v1/auth/', authRouter);

export default app;