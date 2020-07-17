"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cmd = void 0;

var _imports = require("./imports");

var _utils = require("./utils");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cmd = /*#__PURE__*/function () {
  function Cmd() {
    _classCallCheck(this, Cmd);
  }

  _createClass(Cmd, [{
    key: "introduce",
    value: function introduce() {
      console.log("\n".concat(_imports.chalk.yellow(_imports.figlet.textSync(_utils.dictionary.title, {}))), "\n".concat(_imports.chalk.yellow(_utils.separator)), "\n".concat(_imports.chalk.red(_utils.dictionary.title), "\n").concat(_imports.chalk.red(_utils.dictionary.subTitle)), "\n".concat(_imports.chalk.yellow(_utils.separator), "\n"));
    }
  }, {
    key: "list",
    value: function list(config) {
      _imports.inquirer.prompt([{
        type: 'list',
        name: config.associative,
        message: config.message,
        choices: config.commands.map(function (value) {
          return value.cmd;
        })
      }]).then(function (e) {
        var _iterator = _createForOfIteratorHelper(config.commands),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var command = _step.value;

            if (e[config.associative] === command.cmd) {
              command.func();
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }
  }, {
    key: "bye",
    value: function bye() {
      console.log(_imports.chalk.red(_utils.dictionary.bye));
    }
  }, {
    key: "exec",
    value: function exec(command) {
      var argumenti = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      (0, _imports.execa)(command, argumenti, {
        stdio: 'inherit'
      });
    }
  }]);

  return Cmd;
}();

exports.Cmd = Cmd;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbWQudHMiXSwibmFtZXMiOlsiQ21kIiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwieWVsbG93IiwiZmlnbGV0IiwidGV4dFN5bmMiLCJkaWN0aW9uYXJ5IiwidGl0bGUiLCJzZXBhcmF0b3IiLCJyZWQiLCJzdWJUaXRsZSIsImNvbmZpZyIsImlucXVpcmVyIiwicHJvbXB0IiwidHlwZSIsIm5hbWUiLCJhc3NvY2lhdGl2ZSIsIm1lc3NhZ2UiLCJjaG9pY2VzIiwiY29tbWFuZHMiLCJtYXAiLCJ2YWx1ZSIsImNtZCIsInRoZW4iLCJlIiwiY29tbWFuZCIsImZ1bmMiLCJieWUiLCJhcmd1bWVudGkiLCJzdGRpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUdhQSxHOzs7Ozs7O2dDQUNnQjtBQUNyQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLGFBQ05DLGVBQU1DLE1BQU4sQ0FDVUMsZ0JBQU9DLFFBQVAsQ0FBZ0JDLGtCQUFXQyxLQUEzQixFQUFrQyxFQUFsQyxDQURWLENBRE0sZUFJTkwsZUFBTUMsTUFBTixDQUNVSyxnQkFEVixDQUpNLGVBT05OLGVBQU1PLEdBQU4sQ0FDVUgsa0JBQVdDLEtBRHJCLENBUE0sZUFVTkwsZUFBTU8sR0FBTixDQUNVSCxrQkFBV0ksUUFEckIsQ0FWTSxlQWFOUixlQUFNQyxNQUFOLENBQ1VLLGdCQURWLENBYk07QUFpQkg7Ozt5QkFFV0csTSxFQUE4QjtBQUN0Q0Msd0JBQVNDLE1BQVQsQ0FBZ0IsQ0FBQztBQUNiQyxRQUFBQSxJQUFJLEVBQUUsTUFETztBQUViQyxRQUFBQSxJQUFJLEVBQUVKLE1BQU0sQ0FBQ0ssV0FGQTtBQUdiQyxRQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FISDtBQUliQyxRQUFBQSxPQUFPLEVBQUVQLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsS0FBRCxFQUE4QjtBQUN2RCxpQkFBT0EsS0FBSyxDQUFDQyxHQUFiO0FBQ0gsU0FGUTtBQUpJLE9BQUQsQ0FBaEIsRUFPSUMsSUFQSixDQU9TLFVBQUNDLENBQUQsRUFBWTtBQUFBLG1EQUNHYixNQUFNLENBQUNRLFFBRFY7QUFBQTs7QUFBQTtBQUNqQiw4REFBcUM7QUFBQSxnQkFBNUJNLE9BQTRCOztBQUNqQyxnQkFBSUQsQ0FBQyxDQUFDYixNQUFNLENBQUNLLFdBQVIsQ0FBRCxLQUEwQlMsT0FBTyxDQUFDSCxHQUF0QyxFQUEyQztBQUN2Q0csY0FBQUEsT0FBTyxDQUFDQyxJQUFSO0FBQ0E7QUFDSDtBQUNKO0FBTmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPcEIsT0FkRDtBQWVIOzs7MEJBRWlCO0FBQ1YxQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FDSkMsZUFBTU8sR0FBTixDQUNJSCxrQkFBV3FCLEdBRGYsQ0FESTtBQUtQOzs7eUJBRVdGLE8sRUFBaUQ7QUFBQSxVQUFoQ0csU0FBZ0MsdUVBQVYsRUFBVTtBQUM3RCwwQkFBTUgsT0FBTixFQUFlRyxTQUFmLEVBQTBCO0FBQUVDLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BQTFCO0FBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGFsaywgZmlnbGV0LCBpbnF1aXJlciwgZXhlY2EgfSBmcm9tICcuL2ltcG9ydHMnO1xuaW1wb3J0IHsgZGljdGlvbmFyeSwgc2VwYXJhdG9yIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBJQ21kTGlzdENvbmZpZywgSUNtZENvbW1hbmRDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgQ21kIHtcbiAgICBwdWJsaWMgaW50cm9kdWNlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhgXG4ke2NoYWxrLnllbGxvdyhcbiAgICAgICAgICAgIGZpZ2xldC50ZXh0U3luYyhkaWN0aW9uYXJ5LnRpdGxlLCB7fSlcbiAgICAgICAgKX1gLCBgXG4ke2NoYWxrLnllbGxvdyhcbiAgICAgICAgICAgIHNlcGFyYXRvclxuICAgICAgICApfWAsIGBcbiR7Y2hhbGsucmVkKFxuICAgICAgICAgICAgZGljdGlvbmFyeS50aXRsZVxuICAgICAgICApfVxuJHtjaGFsay5yZWQoXG4gICAgICAgICAgICBkaWN0aW9uYXJ5LnN1YlRpdGxlXG4gICAgICAgICl9YCwgYFxuJHtjaGFsay55ZWxsb3coXG4gICAgICAgICAgICBzZXBhcmF0b3JcbiAgICAgICAgKX1cbmApO1xuICAgIH1cblxuICAgIHB1YmxpYyBsaXN0KGNvbmZpZzogSUNtZExpc3RDb25maWcpOiB2b2lkIHtcbiAgICAgICAgaW5xdWlyZXIucHJvbXB0KFt7XG4gICAgICAgICAgICB0eXBlOiAnbGlzdCcsXG4gICAgICAgICAgICBuYW1lOiBjb25maWcuYXNzb2NpYXRpdmUsXG4gICAgICAgICAgICBtZXNzYWdlOiBjb25maWcubWVzc2FnZSxcbiAgICAgICAgICAgIGNob2ljZXM6IGNvbmZpZy5jb21tYW5kcy5tYXAoKHZhbHVlOiBJQ21kQ29tbWFuZENvbmZpZykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5jbWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XSkudGhlbigoZTogYW55KSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb21tYW5kIG9mIGNvbmZpZy5jb21tYW5kcykge1xuICAgICAgICAgICAgICAgIGlmIChlW2NvbmZpZy5hc3NvY2lhdGl2ZV0gPT09IGNvbW1hbmQuY21kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQuZnVuYygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBieWUoKTp2b2lkIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBjaGFsay5yZWQoXG4gICAgICAgICAgICBkaWN0aW9uYXJ5LmJ5ZVxuICAgICAgICApXG4gICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhlYyhjb21tYW5kOiBzdHJpbmcsIGFyZ3VtZW50aTogc3RyaW5nW10gPSBbXSk6IHZvaWQge1xuICAgIGV4ZWNhKGNvbW1hbmQsIGFyZ3VtZW50aSwgeyBzdGRpbzogJ2luaGVyaXQnIH0pXG5cbiAgICB9XG59Il19