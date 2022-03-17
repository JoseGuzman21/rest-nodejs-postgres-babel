"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatedTaskById = exports.getTasks = exports.getTaskById = exports.deleteTaskById = exports.createTask = void 0;

var _Project = _interopRequireDefault(require("../../models/Project"));

var _Task = _interopRequireDefault(require("../../models/Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getTasks = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var tasks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Task["default"].findAll({
              atributes: ['id', 'name', 'done', 'project_id'],
              orderBy: ['id', 'DESC']
            });

          case 3:
            tasks = _context.sent;
            res.status(200).json({
              message: 'Task retrieved successfully',
              data: tasks
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: _context.t0.message,
              data: []
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTasks = getTasks;

var getTaskById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var taskId, task;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            taskId = req.params.taskId;
            _context2.next = 4;
            return _Task["default"].findOne({
              where: {
                id: taskId
              }
            });

          case 4:
            task = _context2.sent;
            res.status(200).json({
              message: 'Task retrieved successfully',
              data: task
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: _context2.t0.message,
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getTaskById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTaskById = getTaskById;

var createTask = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, done, projectid, taskSaved;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectid = _req$body.projectid;
            _context3.next = 4;
            return _Task["default"].create({
              name: name,
              done: done,
              projectid: projectid
            });

          case 4:
            taskSaved = _context3.sent;
            res.status(201).json({
              message: 'Task added successfully',
              data: taskSaved
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: 'Error'
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function createTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createTask = createTask;

var updatedTaskById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var taskId, _req$body2, name, done, projectid, taskFound;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            taskId = req.params.taskId;
            _req$body2 = req.body, name = _req$body2.name, done = _req$body2.done, projectid = _req$body2.projectid;
            _context4.next = 5;
            return _Project["default"].findAll({
              attributes: ['id', 'name', 'done', 'projectid'],
              where: {
                id: taskId
              }
            });

          case 5:
            taskFound = _context4.sent;

            if (taskFound.length > 0) {
              taskFound.forEach(function (project) {
                taskFound.update({
                  name: name,
                  done: done,
                  projectid: projectid
                });
              });
            }

            ;
            res.status(200).json({
              message: 'Task updated successfully',
              data: projectUpdated
            });
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(500).json({
              message: _context4.t0.message,
              data: {}
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function updatedTaskById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updatedTaskById = updatedTaskById;

var deleteTaskById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var taskId;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            taskId = req.params.taskId;
            _context5.next = 4;
            return _Task["default"].destroy({
              where: {
                id: taskId
              }
            });

          case 4:
            res.status(200).json({
              message: 'Task deleted successfully',
              data: {}
            });
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(500).json({
              message: _context5.t0.message,
              data: {}
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function deleteTaskById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTaskById = deleteTaskById;