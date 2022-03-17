import { Sequelize } from "sequelize";
import { sequelize } from '../database/database';
import Task from './Task';

const Project = sequelize.define('project', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    delivery_date: {
        type: Sequelize.DATE
    }
}, {
    timestamp: false
});

Project.hasMany(Task, { foreignKey: 'projectid', sourceKey: 'id' });

Task.belongsTo(Project, { foreignKey: 'projectid', sourceKey: 'id' });

export default Project;