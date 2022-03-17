import express from 'express';
import morgan from 'morgan';
import projectsRoutes from './presentation/routes/projects.routes';
import tasksRoutes from './presentation/routes/task.routes';
import { sequelize } from './database/database';

const app = express();

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json());

// sequelize.connect();

//routes
app.use('/api/projects', projectsRoutes);
app.use('/api/tasks', tasksRoutes);


export default app;