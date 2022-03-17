"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatedProjectById = exports.getProjects = exports.getProjectById = exports.deleteProjectById = exports.createProject = void 0;

var _Project = _interopRequireDefault(require("../../models/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getProjects = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Project["default"].findAll();

          case 3:
            projects = _context.sent;
            res.status(200).json({
              message: 'Projects retrieved successfully',
              data: projects
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

  return function getProjects(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProjects = getProjects;

var getProjectById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var projectid, project;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            projectid = req.params.projectid;
            _context2.next = 4;
            return _Project["default"].findOne({
              where: {
                id: projectid
              }
            });

          case 4:
            project = _context2.sent;
            res.status(200).json({
              message: 'Project retrieved successfully',
              data: project
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

  return function getProjectById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProjectById = getProjectById;

var createProject = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, priority, description, delivery_date, projectSaved;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, name = _req$body.name, priority = _req$body.priority, description = _req$body.description, delivery_date = _req$body.delivery_date;
            _context3.next = 4;
            return _Project["default"].create({
              name: name,
              priority: priority,
              description: description,
              delivery_date: delivery_date
            }, {
              fields: ['name', 'priority', 'description', 'delivery_date']
            });

          case 4:
            projectSaved = _context3.sent;
            res.status(201).json({
              message: 'Project added successfully',
              data: projectSaved
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: _context3.t0.message,
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function createProject(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createProject = createProject;

var updatedProjectById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var projectid, _req$body2, name, priority, description, delivery_date, projectFound;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            projectid = req.params.projectid;
            _req$body2 = req.body, name = _req$body2.name, priority = _req$body2.priority, description = _req$body2.description, delivery_date = _req$body2.delivery_date;
            _context4.next = 5;
            return _Project["default"].findAll({
              attributes: ['id', 'name', 'priority', 'description', 'delivery_date'],
              where: {
                id: projectid
              }
            });

          case 5:
            projectFound = _context4.sent;

            if (projectFound.length > 0) {
              projectFound.forEach(function (project) {
                projectFound.update({
                  name: name,
                  priority: priority,
                  description: description,
                  delivery_date: delivery_date
                });
              });
            }

            ;
            return _context4.abrupt("return", res.status(200).json({
              message: 'Project updated successfully',
              data: projectFound
            }));

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

  return function updatedProjectById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updatedProjectById = updatedProjectById;

var deleteProjectById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var projectid;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            projectid = req.params.projectid;
            _context5.next = 4;
            return _Project["default"].destroy({
              where: {
                id: projectid
              }
            });

          case 4:
            res.status(200).json({
              message: 'Project deleted successfully',
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

  return function deleteProjectById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProjectById = deleteProjectById;