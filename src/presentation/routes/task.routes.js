import { Router } from 'express';
import { createTask, deleteTaskById, getTaskById, getTasks, getTasksByProjectId, updatedTaskById } from '../controllers/task.controller';

const router = Router();

// /api/projects/
router.get('/', getTasks);

router.get('/:taskId', getTaskById);

router.post('/', createTask);

router.put('/:taskId', updatedTaskById);

router.delete('/:taskId', deleteTaskById);

// /api/tasks/project/:projectId
router.get('project/:projectid', getTasksByProjectId)


export default router;