"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cmd = void 0;

var _imports = require("./imports");

var _utils = require("./utils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
              command.func !== undefined ? command.func() : '';
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
    key: "inline",
    value: function inline(config) {
      var _this = this;

      _imports.inquirer.prompt([{
        type: "Input",
        name: config.associative,
        message: config.message
      }]).then(function (answers) {
        if (~config.command.cmd.indexOf(_utils.COMMANDS.GIT_CLONE)) {
          _this.gitClone(config.command.cmd.replace(_utils.COMMANDS.GIT_CLONE, '').trim().replace('%name%', answers[config.associative]).trim().split(' '));
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
  }, {
    key: "gitClone",
    value: function gitClone() {
      var command = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      (0, _imports.execa)('git', ['clone'].concat(_toConsumableArray(command)), {
        stdio: 'inherit'
      });
    }
  }]);

  return Cmd;
}();

exports.Cmd = Cmd;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbWQudHMiXSwibmFtZXMiOlsiQ21kIiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwieWVsbG93IiwiZmlnbGV0IiwidGV4dFN5bmMiLCJkaWN0aW9uYXJ5IiwidGl0bGUiLCJzZXBhcmF0b3IiLCJyZWQiLCJzdWJUaXRsZSIsImNvbmZpZyIsImlucXVpcmVyIiwicHJvbXB0IiwidHlwZSIsIm5hbWUiLCJhc3NvY2lhdGl2ZSIsIm1lc3NhZ2UiLCJjaG9pY2VzIiwiY29tbWFuZHMiLCJtYXAiLCJ2YWx1ZSIsImNtZCIsInRoZW4iLCJlIiwiY29tbWFuZCIsImZ1bmMiLCJ1bmRlZmluZWQiLCJhbnN3ZXJzIiwiaW5kZXhPZiIsIkNPTU1BTkRTIiwiR0lUX0NMT05FIiwiZ2l0Q2xvbmUiLCJyZXBsYWNlIiwidHJpbSIsInNwbGl0IiwiYnllIiwiYXJndW1lbnRpIiwic3RkaW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdhQSxHOzs7Ozs7O2dDQUNnQjtBQUNyQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLGFBQ05DLGVBQU1DLE1BQU4sQ0FDVUMsZ0JBQU9DLFFBQVAsQ0FBZ0JDLGtCQUFXQyxLQUEzQixFQUFrQyxFQUFsQyxDQURWLENBRE0sZUFJTkwsZUFBTUMsTUFBTixDQUNVSyxnQkFEVixDQUpNLGVBT05OLGVBQU1PLEdBQU4sQ0FDVUgsa0JBQVdDLEtBRHJCLENBUE0sZUFVTkwsZUFBTU8sR0FBTixDQUNVSCxrQkFBV0ksUUFEckIsQ0FWTSxlQWFOUixlQUFNQyxNQUFOLENBQ1VLLGdCQURWLENBYk07QUFpQkg7Ozt5QkFFV0csTSxFQUE4QjtBQUN0Q0Msd0JBQVNDLE1BQVQsQ0FBZ0IsQ0FBQztBQUNiQyxRQUFBQSxJQUFJLEVBQUUsTUFETztBQUViQyxRQUFBQSxJQUFJLEVBQUVKLE1BQU0sQ0FBQ0ssV0FGQTtBQUdiQyxRQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FISDtBQUliQyxRQUFBQSxPQUFPLEVBQUVQLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsS0FBRCxFQUE4QjtBQUN2RCxpQkFBT0EsS0FBSyxDQUFDQyxHQUFiO0FBQ0gsU0FGUTtBQUpJLE9BQUQsQ0FBaEIsRUFPSUMsSUFQSixDQU9TLFVBQUNDLENBQUQsRUFBWTtBQUFBLG1EQUNHYixNQUFNLENBQUNRLFFBRFY7QUFBQTs7QUFBQTtBQUNqQiw4REFBcUM7QUFBQSxnQkFBNUJNLE9BQTRCOztBQUNqQyxnQkFBSUQsQ0FBQyxDQUFDYixNQUFNLENBQUNLLFdBQVIsQ0FBRCxLQUEwQlMsT0FBTyxDQUFDSCxHQUF0QyxFQUEyQztBQUN2Q0csY0FBQUEsT0FBTyxDQUFDQyxJQUFSLEtBQWlCQyxTQUFqQixHQUE2QkYsT0FBTyxDQUFDQyxJQUFSLEVBQTdCLEdBQThDLEVBQTlDO0FBQ0E7QUFDSDtBQUNKO0FBTmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPcEIsT0FkRDtBQWVIOzs7MkJBRWFmLE0sRUFBeUI7QUFBQTs7QUFDbkNDLHdCQUNLQyxNQURMLENBQ1ksQ0FBQztBQUFFQyxRQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsUUFBQUEsSUFBSSxFQUFFSixNQUFNLENBQUNLLFdBQTlCO0FBQTJDQyxRQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ007QUFBM0QsT0FBRCxDQURaLEVBRUtNLElBRkwsQ0FFVSxVQUFDSyxPQUFELEVBQWtCO0FBQ3BCLFlBQUksQ0FBQ2pCLE1BQU0sQ0FBQ2MsT0FBUCxDQUFlSCxHQUFmLENBQW1CTyxPQUFuQixDQUEyQkMsZ0JBQVNDLFNBQXBDLENBQUwsRUFBcUQ7QUFDakQsVUFBQSxLQUFJLENBQUNDLFFBQUwsQ0FDSXJCLE1BQU0sQ0FDRGMsT0FETCxDQUVLSCxHQUZMLENBR0tXLE9BSEwsQ0FHYUgsZ0JBQVNDLFNBSHRCLEVBR2lDLEVBSGpDLEVBSUtHLElBSkwsR0FLS0QsT0FMTCxDQUthLFFBTGIsRUFLdUJMLE9BQU8sQ0FBQ2pCLE1BQU0sQ0FBQ0ssV0FBUixDQUw5QixFQU1La0IsSUFOTCxHQU9LQyxLQVBMLENBT1csR0FQWCxDQURKO0FBVUg7QUFDSixPQWZMO0FBZ0JIOzs7MEJBRWtCO0FBQ2ZuQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FDSUMsZUFBTU8sR0FBTixDQUNJSCxrQkFBVzhCLEdBRGYsQ0FESjtBQUtIOzs7eUJBRVdYLE8sRUFBaUQ7QUFBQSxVQUFoQ1ksU0FBZ0MsdUVBQVYsRUFBVTtBQUN6RCwwQkFBTVosT0FBTixFQUFlWSxTQUFmLEVBQTBCO0FBQUVDLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BQTFCO0FBQ0g7OzsrQkFFdUM7QUFBQSxVQUF4QmIsT0FBd0IsdUVBQUosRUFBSTtBQUNwQywwQkFBTSxLQUFOLEdBQWMsT0FBZCw0QkFBMEJBLE9BQTFCLElBQW9DO0FBQUVhLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BQXBDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGFsaywgZmlnbGV0LCBpbnF1aXJlciwgZXhlY2EgfSBmcm9tICcuL2ltcG9ydHMnO1xuaW1wb3J0IHsgZGljdGlvbmFyeSwgc2VwYXJhdG9yLCBDT01NQU5EUyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgSUNtZExpc3RDb25maWcsIElDbWRDb21tYW5kQ29uZmlnLCBJQ21kSW5wdXRDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgQ21kIHtcbiAgICBwdWJsaWMgaW50cm9kdWNlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhgXG4ke2NoYWxrLnllbGxvdyhcbiAgICAgICAgICAgIGZpZ2xldC50ZXh0U3luYyhkaWN0aW9uYXJ5LnRpdGxlLCB7fSlcbiAgICAgICAgKX1gLCBgXG4ke2NoYWxrLnllbGxvdyhcbiAgICAgICAgICAgIHNlcGFyYXRvclxuICAgICAgICApfWAsIGBcbiR7Y2hhbGsucmVkKFxuICAgICAgICAgICAgZGljdGlvbmFyeS50aXRsZVxuICAgICAgICApfVxuJHtjaGFsay5yZWQoXG4gICAgICAgICAgICBkaWN0aW9uYXJ5LnN1YlRpdGxlXG4gICAgICAgICl9YCwgYFxuJHtjaGFsay55ZWxsb3coXG4gICAgICAgICAgICBzZXBhcmF0b3JcbiAgICAgICAgKX1cbmApO1xuICAgIH1cblxuICAgIHB1YmxpYyBsaXN0KGNvbmZpZzogSUNtZExpc3RDb25maWcpOiB2b2lkIHtcbiAgICAgICAgaW5xdWlyZXIucHJvbXB0KFt7XG4gICAgICAgICAgICB0eXBlOiAnbGlzdCcsXG4gICAgICAgICAgICBuYW1lOiBjb25maWcuYXNzb2NpYXRpdmUsXG4gICAgICAgICAgICBtZXNzYWdlOiBjb25maWcubWVzc2FnZSxcbiAgICAgICAgICAgIGNob2ljZXM6IGNvbmZpZy5jb21tYW5kcy5tYXAoKHZhbHVlOiBJQ21kQ29tbWFuZENvbmZpZykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5jbWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XSkudGhlbigoZTogYW55KSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb21tYW5kIG9mIGNvbmZpZy5jb21tYW5kcykge1xuICAgICAgICAgICAgICAgIGlmIChlW2NvbmZpZy5hc3NvY2lhdGl2ZV0gPT09IGNvbW1hbmQuY21kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQuZnVuYyAhPT0gdW5kZWZpbmVkID8gY29tbWFuZC5mdW5jKCkgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5saW5lKGNvbmZpZzogSUNtZElucHV0Q29uZmlnKSB7XG4gICAgICAgIGlucXVpcmVyXG4gICAgICAgICAgICAucHJvbXB0KFt7IHR5cGU6IFwiSW5wdXRcIiwgbmFtZTogY29uZmlnLmFzc29jaWF0aXZlLCBtZXNzYWdlOiBjb25maWcubWVzc2FnZSB9XSlcbiAgICAgICAgICAgIC50aGVuKChhbnN3ZXJzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAofmNvbmZpZy5jb21tYW5kLmNtZC5pbmRleE9mKENPTU1BTkRTLkdJVF9DTE9ORSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5naXRDbG9uZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb21tYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNtZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKENPTU1BTkRTLkdJVF9DTE9ORSwgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclbmFtZSUnLCBhbnN3ZXJzW2NvbmZpZy5hc3NvY2lhdGl2ZV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGJ5ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBjaGFsay5yZWQoXG4gICAgICAgICAgICAgICAgZGljdGlvbmFyeS5ieWVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhlYyhjb21tYW5kOiBzdHJpbmcsIGFyZ3VtZW50aTogc3RyaW5nW10gPSBbXSk6IHZvaWQge1xuICAgICAgICBleGVjYShjb21tYW5kLCBhcmd1bWVudGksIHsgc3RkaW86ICdpbmhlcml0JyB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBnaXRDbG9uZShjb21tYW5kOiBzdHJpbmdbXSA9IFtdKSB7XG4gICAgICAgIGV4ZWNhKCdnaXQnLCBbJ2Nsb25lJywgLi4uY29tbWFuZF0sIHsgc3RkaW86ICdpbmhlcml0JyB9KVxuICAgIH1cbn0iXX0=