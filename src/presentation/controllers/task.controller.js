import Project from '../../models/Project';
import Task from '../../models/Task';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            atributes: ['id', 'name', 'done', 'project_id'],
            orderBy: ['id', 'DESC']
        });
        res.status(200).json({ message: 'Task retrieved successfully', data: tasks });
    } catch (err) {
        res.status(500).json({ message: err.message, data: [] });
    }
}

export const getTaskById = async (req, res) => {
    try {
        const { taskId } = req.params;

        const task = await Task.findOne({ where: { id: taskId } });

        res.status(200).json({ message: 'Task retrieved successfully', data: task });

    } catch (err) {
        res.status(500).json({ message: err.message, data: {} });
    }
}

export const createTask = async (req, res) => {
    try {
        const { name, done, projectid } = req.body;

        const taskSaved = await Task.create({ name, done, projectid });

        res.status(201).json({ message: 'Task added successfully', data: taskSaved });

    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
}

export const updatedTaskById = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { name, done, projectid } = req.body;

        const taskFound = await Project.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: { id: taskId }
        });

        if (taskFound.length > 0) {
            taskFound.forEach(project => {
                taskFound.update({
                    name,
                    done,
                    projectid
                });
            })
        };

        res.status(200).json({ message: 'Task updated successfully', data: projectUpdated });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message, data: {} });
    }
}

export const deleteTaskById = async (req, res) => {
    try {
        const { taskId } = req.params;

        await Task.destroy({ where: { id: taskId } });

        res.status(200).json({ message: 'Task deleted successfully', data: {} });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message, data: {} });
    }
}

export const getTasksByProjectId = async (req, res) => {
    try {
        const { projectid } = req.params;

        const tasks = await Task.findAll({
            atributes: ['id', 'projectId', 'name', 'done'],
            where: { projectid }
        })

        res.status(200).json({ message: 'Task get successfully', data: tasks });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message, data: {} });
    }
}