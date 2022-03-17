"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)(); // api/projects/

router.get('/', _task.getTasks);
router.get('/:taskId', _task.getTaskById);
router.post('/', _task.createTask);
router.put('/:taskId', _task.updatedTaskById);
router["delete"]('/:taskId', _task.deleteTaskById);
var _default = router;
exports["default"] = _default;