import Project from '../../models/Project';

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.status(200).json({ message: 'Projects retrieved successfully', data: projects });
    } catch (err) {
        res.status(500).json({ message: err.message, data: [] });
    }
}

export const getProjectById = async (req, res) => {
    try {
        const { projectid } = req.params;

        const project = await Project.findOne({ where: { id: projectid } });

        res.status(200).json({ message: 'Project retrieved successfully', data: project });

    } catch (err) {
        res.status(500).json({ message: err.message, data: {} });
    }
}

export const createProject = async (req, res) => {
    try {
        const { name, priority, description, delivery_date } = req.body;

        const projectSaved = await Project.create({ name, priority, description, delivery_date },
            { fields: ['name', 'priority', 'description', 'delivery_date'] });

        res.status(201).json({ message: 'Project added successfully', data: projectSaved });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message, data: {} });
    }
}

export const updatedProjectById = async (req, res) => {
    try {
        const { projectid } = req.params;
        const { name, priority, description, delivery_date } = req.body;

        const projectFound = await Project.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'delivery_date'],
            where: { id: projectid }
        });

        if (projectFound.length > 0) {
            projectFound.forEach(project => {
                projectFound.update({
                    name,
                    priority,
                    description,
                    delivery_date
                });
            })
        };

        return res.status(200).json({ message: 'Project updated successfully', data: projectFound });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message, data: {} });
    }
}

export const deleteProjectById = async (req, res) => {
    try {
        const { projectid } = req.params;

        await Project.destroy({ where: { id: projectid } });

        res.status(200).json({ message: 'Project deleted successfully', data: {} });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message, data: {} });
    }
}