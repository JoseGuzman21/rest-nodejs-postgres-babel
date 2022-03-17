"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _database = require("../database/database");

var _Task = _interopRequireDefault(require("./Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Project = _database.sequelize.define('project', {
  id: {
    type: _sequelize.Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize.Sequelize.STRING
  },
  priority: {
    type: _sequelize.Sequelize.INTEGER
  },
  description: {
    type: _sequelize.Sequelize.TEXT
  },
  delivery_date: {
    type: _sequelize.Sequelize.DATE
  }
}, {
  timestamp: false
});

Project.hasMany(_Task["default"], {
  foreignKey: 'projectid',
  sourceKey: 'id'
});

_Task["default"].belongsTo(Project, {
  foreignKey: 'projectid',
  sourceKey: 'id'
});

var _default = Project;
exports["default"] = _default;