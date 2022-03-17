import { Router } from 'express';
import { getProjects, getProjectById, createProject, updatedProjectById, deleteProjectById }
    from '../controllers/projects.controller';

const router = Router();

// api/projects/
router.get('/', getProjects);

router.get('/:projectid', getProjectById);

router.post('/', createProject);

router.put('/:projectid', updatedProjectById);

router.delete('/:projectid', deleteProjectById);

export default router;