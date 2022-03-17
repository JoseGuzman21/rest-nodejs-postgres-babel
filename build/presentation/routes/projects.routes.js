"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _projects = require("../controllers/projects.controller");

var router = (0, _express.Router)(); // api/projects/

router.get('/', _projects.getProjects);
router.get('/:projectid', _projects.getProjectById);
router.post('/', _projects.createProject);
router.put('/:projectid', _projects.updatedProjectById);
router["delete"]('/:projectid', _projects.deleteProjectById);
var _default = router;
exports["default"] = _default;