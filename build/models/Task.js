"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _database = require("../database/database");

var Task = _database.sequelize.define('task', {
  id: {
    type: _sequelize.Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize.Sequelize.STRING
  },
  done: {
    type: _sequelize.Sequelize.BOOLEAN
  },
  projectid: {
    type: _sequelize.Sequelize.INTEGER
  }
}, {
  timestamp: false
});

var _default = Task;
exports["default"] = _default;