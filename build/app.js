"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _projects = _interopRequireDefault(require("./presentation/routes/projects.routes"));

var _task = _interopRequireDefault(require("./presentation/routes/task.routes"));

var _database = require("./database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //middlewares

app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json()); // sequelize.connect();
//routes

app.use('/api/projects', _projects["default"]);
app.use('/api/tasks', _task["default"]);
var _default = app;
exports["default"] = _default;