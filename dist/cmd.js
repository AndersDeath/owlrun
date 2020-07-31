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

/**
 * Class with methods for working with terminal
 */
var Cmd = /*#__PURE__*/function () {
  function Cmd() {
    _classCallCheck(this, Cmd);
  }

  _createClass(Cmd, [{
    key: "introduce",

    /**
     * Display introduction
     */
    value: function introduce() {
      console.log("\n".concat(_imports.chalk.yellow(_imports.figlet.textSync(_utils.dictionary.title, {}))), "\n".concat(_imports.chalk.yellow(_utils.separator)), "\n".concat(_imports.chalk.red(_utils.dictionary.title), "\n").concat(_imports.chalk.red(_utils.dictionary.subTitle)), "\n".concat(_imports.chalk.yellow(_utils.separator), "\n"));
    }
    /**
     * Create and displace inquirer promt list
     * @param config config for CmdList
     */

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
    /**
     * Create and displace inquirer promt input
     * @param config config for CmdInput
     */

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
    /**
     * Display bye
     */

  }, {
    key: "bye",
    value: function bye() {
      console.log(_imports.chalk.red(_utils.dictionary.bye));
    }
    /**
     * A terminal commad execution
     * @param command exec command
     * @param argumenti exec arguments
     */

  }, {
    key: "exec",
    value: function exec(command) {
      var argumenti = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      (0, _imports.execa)(command, argumenti, {
        stdio: 'inherit'
      });
    }
    /**
     * Git clone execution
     * @param command git clone params
     */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbWQudHMiXSwibmFtZXMiOlsiQ21kIiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwieWVsbG93IiwiZmlnbGV0IiwidGV4dFN5bmMiLCJkaWN0aW9uYXJ5IiwidGl0bGUiLCJzZXBhcmF0b3IiLCJyZWQiLCJzdWJUaXRsZSIsImNvbmZpZyIsImlucXVpcmVyIiwicHJvbXB0IiwidHlwZSIsIm5hbWUiLCJhc3NvY2lhdGl2ZSIsIm1lc3NhZ2UiLCJjaG9pY2VzIiwiY29tbWFuZHMiLCJtYXAiLCJ2YWx1ZSIsImNtZCIsInRoZW4iLCJlIiwiY29tbWFuZCIsImZ1bmMiLCJ1bmRlZmluZWQiLCJhbnN3ZXJzIiwiaW5kZXhPZiIsIkNPTU1BTkRTIiwiR0lUX0NMT05FIiwiZ2l0Q2xvbmUiLCJyZXBsYWNlIiwidHJpbSIsInNwbGl0IiwiYnllIiwiYXJndW1lbnRpIiwic3RkaW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7SUFHYUEsRzs7Ozs7Ozs7QUFDVDs7O2dDQUd5QjtBQUNyQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLGFBQ05DLGVBQU1DLE1BQU4sQ0FDVUMsZ0JBQU9DLFFBQVAsQ0FBZ0JDLGtCQUFXQyxLQUEzQixFQUFrQyxFQUFsQyxDQURWLENBRE0sZUFJTkwsZUFBTUMsTUFBTixDQUNVSyxnQkFEVixDQUpNLGVBT05OLGVBQU1PLEdBQU4sQ0FDVUgsa0JBQVdDLEtBRHJCLENBUE0sZUFVTkwsZUFBTU8sR0FBTixDQUNVSCxrQkFBV0ksUUFEckIsQ0FWTSxlQWFOUixlQUFNQyxNQUFOLENBQ1VLLGdCQURWLENBYk07QUFpQkg7QUFFRDs7Ozs7Ozt5QkFJWUcsTSxFQUE4QjtBQUN0Q0Msd0JBQVNDLE1BQVQsQ0FBZ0IsQ0FBQztBQUNiQyxRQUFBQSxJQUFJLEVBQUUsTUFETztBQUViQyxRQUFBQSxJQUFJLEVBQUVKLE1BQU0sQ0FBQ0ssV0FGQTtBQUdiQyxRQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FISDtBQUliQyxRQUFBQSxPQUFPLEVBQUVQLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsS0FBRCxFQUE4QjtBQUN2RCxpQkFBT0EsS0FBSyxDQUFDQyxHQUFiO0FBQ0gsU0FGUTtBQUpJLE9BQUQsQ0FBaEIsRUFPSUMsSUFQSixDQU9TLFVBQUNDLENBQUQsRUFBWTtBQUFBLG1EQUNHYixNQUFNLENBQUNRLFFBRFY7QUFBQTs7QUFBQTtBQUNqQiw4REFBcUM7QUFBQSxnQkFBNUJNLE9BQTRCOztBQUNqQyxnQkFBSUQsQ0FBQyxDQUFDYixNQUFNLENBQUNLLFdBQVIsQ0FBRCxLQUEwQlMsT0FBTyxDQUFDSCxHQUF0QyxFQUEyQztBQUN2Q0csY0FBQUEsT0FBTyxDQUFDQyxJQUFSLEtBQWlCQyxTQUFqQixHQUE2QkYsT0FBTyxDQUFDQyxJQUFSLEVBQTdCLEdBQThDLEVBQTlDO0FBQ0E7QUFDSDtBQUNKO0FBTmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPcEIsT0FkRDtBQWVIO0FBRUQ7Ozs7Ozs7MkJBSWNmLE0sRUFBeUI7QUFBQTs7QUFDbkNDLHdCQUNLQyxNQURMLENBQ1ksQ0FBQztBQUFFQyxRQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsUUFBQUEsSUFBSSxFQUFFSixNQUFNLENBQUNLLFdBQTlCO0FBQTJDQyxRQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ007QUFBM0QsT0FBRCxDQURaLEVBRUtNLElBRkwsQ0FFVSxVQUFDSyxPQUFELEVBQWtCO0FBQ3BCLFlBQUksQ0FBQ2pCLE1BQU0sQ0FBQ2MsT0FBUCxDQUFlSCxHQUFmLENBQW1CTyxPQUFuQixDQUEyQkMsZ0JBQVNDLFNBQXBDLENBQUwsRUFBcUQ7QUFDakQsVUFBQSxLQUFJLENBQUNDLFFBQUwsQ0FDSXJCLE1BQU0sQ0FDRGMsT0FETCxDQUVLSCxHQUZMLENBR0tXLE9BSEwsQ0FHYUgsZ0JBQVNDLFNBSHRCLEVBR2lDLEVBSGpDLEVBSUtHLElBSkwsR0FLS0QsT0FMTCxDQUthLFFBTGIsRUFLdUJMLE9BQU8sQ0FBQ2pCLE1BQU0sQ0FBQ0ssV0FBUixDQUw5QixFQU1La0IsSUFOTCxHQU9LQyxLQVBMLENBT1csR0FQWCxDQURKO0FBVUg7QUFDSixPQWZMO0FBZ0JIO0FBRUQ7Ozs7OzswQkFHbUI7QUFDZm5DLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUNJQyxlQUFNTyxHQUFOLENBQ0lILGtCQUFXOEIsR0FEZixDQURKO0FBS0g7QUFFRDs7Ozs7Ozs7eUJBS1lYLE8sRUFBaUQ7QUFBQSxVQUFoQ1ksU0FBZ0MsdUVBQVYsRUFBVTtBQUN6RCwwQkFBTVosT0FBTixFQUFlWSxTQUFmLEVBQTBCO0FBQUVDLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BQTFCO0FBQ0g7QUFFRDs7Ozs7OzsrQkFJd0M7QUFBQSxVQUF4QmIsT0FBd0IsdUVBQUosRUFBSTtBQUNwQywwQkFBTSxLQUFOLEdBQWMsT0FBZCw0QkFBMEJBLE9BQTFCLElBQW9DO0FBQUVhLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BQXBDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGFsaywgZmlnbGV0LCBpbnF1aXJlciwgZXhlY2EgfSBmcm9tICcuL2ltcG9ydHMnO1xyXG5pbXBvcnQgeyBkaWN0aW9uYXJ5LCBzZXBhcmF0b3IsIENPTU1BTkRTIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IElDbWRMaXN0Q29uZmlnLCBJQ21kQ29tbWFuZENvbmZpZywgSUNtZElucHV0Q29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB3aXRoIG1ldGhvZHMgZm9yIHdvcmtpbmcgd2l0aCB0ZXJtaW5hbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENtZCB7XHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXkgaW50cm9kdWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbnRyb2R1Y2UoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFxyXG4ke2NoYWxrLnllbGxvdyhcclxuICAgICAgICAgICAgZmlnbGV0LnRleHRTeW5jKGRpY3Rpb25hcnkudGl0bGUsIHt9KVxyXG4gICAgICAgICl9YCwgYFxyXG4ke2NoYWxrLnllbGxvdyhcclxuICAgICAgICAgICAgc2VwYXJhdG9yXHJcbiAgICAgICAgKX1gLCBgXHJcbiR7Y2hhbGsucmVkKFxyXG4gICAgICAgICAgICBkaWN0aW9uYXJ5LnRpdGxlXHJcbiAgICAgICAgKX1cclxuJHtjaGFsay5yZWQoXHJcbiAgICAgICAgICAgIGRpY3Rpb25hcnkuc3ViVGl0bGVcclxuICAgICAgICApfWAsIGBcclxuJHtjaGFsay55ZWxsb3coXHJcbiAgICAgICAgICAgIHNlcGFyYXRvclxyXG4gICAgICAgICl9XHJcbmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuZCBkaXNwbGFjZSBpbnF1aXJlciBwcm9tdCBsaXN0XHJcbiAgICAgKiBAcGFyYW0gY29uZmlnIGNvbmZpZyBmb3IgQ21kTGlzdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlzdChjb25maWc6IElDbWRMaXN0Q29uZmlnKTogdm9pZCB7XHJcbiAgICAgICAgaW5xdWlyZXIucHJvbXB0KFt7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsaXN0JyxcclxuICAgICAgICAgICAgbmFtZTogY29uZmlnLmFzc29jaWF0aXZlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBjb25maWcubWVzc2FnZSxcclxuICAgICAgICAgICAgY2hvaWNlczogY29uZmlnLmNvbW1hbmRzLm1hcCgodmFsdWU6IElDbWRDb21tYW5kQ29uZmlnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuY21kO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1dKS50aGVuKChlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29tbWFuZCBvZiBjb25maWcuY29tbWFuZHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlW2NvbmZpZy5hc3NvY2lhdGl2ZV0gPT09IGNvbW1hbmQuY21kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC5mdW5jICE9PSB1bmRlZmluZWQgPyBjb21tYW5kLmZ1bmMoKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW5kIGRpc3BsYWNlIGlucXVpcmVyIHByb210IGlucHV0XHJcbiAgICAgKiBAcGFyYW0gY29uZmlnIGNvbmZpZyBmb3IgQ21kSW5wdXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlubGluZShjb25maWc6IElDbWRJbnB1dENvbmZpZykge1xyXG4gICAgICAgIGlucXVpcmVyXHJcbiAgICAgICAgICAgIC5wcm9tcHQoW3sgdHlwZTogXCJJbnB1dFwiLCBuYW1lOiBjb25maWcuYXNzb2NpYXRpdmUsIG1lc3NhZ2U6IGNvbmZpZy5tZXNzYWdlIH1dKVxyXG4gICAgICAgICAgICAudGhlbigoYW5zd2VyczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAofmNvbmZpZy5jb21tYW5kLmNtZC5pbmRleE9mKENPTU1BTkRTLkdJVF9DTE9ORSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdpdENsb25lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb21tYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY21kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShDT01NQU5EUy5HSVRfQ0xPTkUsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVuYW1lJScsIGFuc3dlcnNbY29uZmlnLmFzc29jaWF0aXZlXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5IGJ5ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYnllKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBjaGFsay5yZWQoXHJcbiAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5LmJ5ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgdGVybWluYWwgY29tbWFkIGV4ZWN1dGlvblxyXG4gICAgICogQHBhcmFtIGNvbW1hbmQgZXhlYyBjb21tYW5kXHJcbiAgICAgKiBAcGFyYW0gYXJndW1lbnRpIGV4ZWMgYXJndW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjKGNvbW1hbmQ6IHN0cmluZywgYXJndW1lbnRpOiBzdHJpbmdbXSA9IFtdKTogdm9pZCB7XHJcbiAgICAgICAgZXhlY2EoY29tbWFuZCwgYXJndW1lbnRpLCB7IHN0ZGlvOiAnaW5oZXJpdCcgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdpdCBjbG9uZSBleGVjdXRpb25cclxuICAgICAqIEBwYXJhbSBjb21tYW5kIGdpdCBjbG9uZSBwYXJhbXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdpdENsb25lKGNvbW1hbmQ6IHN0cmluZ1tdID0gW10pIHtcclxuICAgICAgICBleGVjYSgnZ2l0JywgWydjbG9uZScsIC4uLmNvbW1hbmRdLCB7IHN0ZGlvOiAnaW5oZXJpdCcgfSlcclxuICAgIH1cclxufSJdfQ==