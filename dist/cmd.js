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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbWQudHMiXSwibmFtZXMiOlsiQ21kIiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwieWVsbG93IiwiZmlnbGV0IiwidGV4dFN5bmMiLCJkaWN0aW9uYXJ5IiwidGl0bGUiLCJzZXBhcmF0b3IiLCJyZWQiLCJzdWJUaXRsZSIsImNvbmZpZyIsImlucXVpcmVyIiwicHJvbXB0IiwidHlwZSIsIm5hbWUiLCJhc3NvY2lhdGl2ZSIsIm1lc3NhZ2UiLCJjaG9pY2VzIiwiY29tbWFuZHMiLCJtYXAiLCJ2YWx1ZSIsImNtZCIsInRoZW4iLCJlIiwiY29tbWFuZCIsImZ1bmMiLCJieWUiLCJhcmd1bWVudGkiLCJzdGRpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR2FBLEc7Ozs7Ozs7Z0NBQ2dCO0FBQ3JCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsYUFDTkMsZUFBTUMsTUFBTixDQUNVQyxnQkFBT0MsUUFBUCxDQUFnQkMsa0JBQVdDLEtBQTNCLEVBQWtDLEVBQWxDLENBRFYsQ0FETSxlQUlOTCxlQUFNQyxNQUFOLENBQ1VLLGdCQURWLENBSk0sZUFPTk4sZUFBTU8sR0FBTixDQUNVSCxrQkFBV0MsS0FEckIsQ0FQTSxlQVVOTCxlQUFNTyxHQUFOLENBQ1VILGtCQUFXSSxRQURyQixDQVZNLGVBYU5SLGVBQU1DLE1BQU4sQ0FDVUssZ0JBRFYsQ0FiTTtBQWlCSDs7O3lCQUVXRyxNLEVBQThCO0FBQ3RDQyx3QkFBU0MsTUFBVCxDQUFnQixDQUFDO0FBQ2JDLFFBQUFBLElBQUksRUFBRSxNQURPO0FBRWJDLFFBQUFBLElBQUksRUFBRUosTUFBTSxDQUFDSyxXQUZBO0FBR2JDLFFBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQUhIO0FBSWJDLFFBQUFBLE9BQU8sRUFBRVAsTUFBTSxDQUFDUSxRQUFQLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxLQUFELEVBQThCO0FBQ3ZELGlCQUFPQSxLQUFLLENBQUNDLEdBQWI7QUFDSCxTQUZRO0FBSkksT0FBRCxDQUFoQixFQU9JQyxJQVBKLENBT1MsVUFBQ0MsQ0FBRCxFQUFZO0FBQUEsbURBQ0diLE1BQU0sQ0FBQ1EsUUFEVjtBQUFBOztBQUFBO0FBQ2pCLDhEQUFxQztBQUFBLGdCQUE1Qk0sT0FBNEI7O0FBQ2pDLGdCQUFJRCxDQUFDLENBQUNiLE1BQU0sQ0FBQ0ssV0FBUixDQUFELEtBQTBCUyxPQUFPLENBQUNILEdBQXRDLEVBQTJDO0FBQ3ZDRyxjQUFBQSxPQUFPLENBQUNDLElBQVI7QUFDQTtBQUNIO0FBQ0o7QUFOZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9wQixPQWREO0FBZUg7OzswQkFFaUI7QUFDVjFCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUNKQyxlQUFNTyxHQUFOLENBQ0lILGtCQUFXcUIsR0FEZixDQURJO0FBS1A7Ozt5QkFFV0YsTyxFQUFpRDtBQUFBLFVBQWhDRyxTQUFnQyx1RUFBVixFQUFVO0FBQ3pELDBCQUFNSCxPQUFOLEVBQWVHLFNBQWYsRUFBMEI7QUFBRUMsUUFBQUEsS0FBSyxFQUFFO0FBQVQsT0FBMUI7QUFDSDs7OytCQUV1QztBQUFBLFVBQXhCSixPQUF3Qix1RUFBSixFQUFJO0FBQ3BDLDBCQUFNLEtBQU4sR0FBYyxPQUFkLDRCQUEwQkEsT0FBMUIsSUFBb0M7QUFBRUksUUFBQUEsS0FBSyxFQUFFO0FBQVQsT0FBcEM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoYWxrLCBmaWdsZXQsIGlucXVpcmVyLCBleGVjYSB9IGZyb20gJy4vaW1wb3J0cyc7XG5pbXBvcnQgeyBkaWN0aW9uYXJ5LCBzZXBhcmF0b3IgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IElDbWRMaXN0Q29uZmlnLCBJQ21kQ29tbWFuZENvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBDbWQge1xuICAgIHB1YmxpYyBpbnRyb2R1Y2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBcbiR7Y2hhbGsueWVsbG93KFxuICAgICAgICAgICAgZmlnbGV0LnRleHRTeW5jKGRpY3Rpb25hcnkudGl0bGUsIHt9KVxuICAgICAgICApfWAsIGBcbiR7Y2hhbGsueWVsbG93KFxuICAgICAgICAgICAgc2VwYXJhdG9yXG4gICAgICAgICl9YCwgYFxuJHtjaGFsay5yZWQoXG4gICAgICAgICAgICBkaWN0aW9uYXJ5LnRpdGxlXG4gICAgICAgICl9XG4ke2NoYWxrLnJlZChcbiAgICAgICAgICAgIGRpY3Rpb25hcnkuc3ViVGl0bGVcbiAgICAgICAgKX1gLCBgXG4ke2NoYWxrLnllbGxvdyhcbiAgICAgICAgICAgIHNlcGFyYXRvclxuICAgICAgICApfVxuYCk7XG4gICAgfVxuXG4gICAgcHVibGljIGxpc3QoY29uZmlnOiBJQ21kTGlzdENvbmZpZyk6IHZvaWQge1xuICAgICAgICBpbnF1aXJlci5wcm9tcHQoW3tcbiAgICAgICAgICAgIHR5cGU6ICdsaXN0JyxcbiAgICAgICAgICAgIG5hbWU6IGNvbmZpZy5hc3NvY2lhdGl2ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvbmZpZy5tZXNzYWdlLFxuICAgICAgICAgICAgY2hvaWNlczogY29uZmlnLmNvbW1hbmRzLm1hcCgodmFsdWU6IElDbWRDb21tYW5kQ29uZmlnKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNtZDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1dKS50aGVuKChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbW1hbmQgb2YgY29uZmlnLmNvbW1hbmRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVbY29uZmlnLmFzc29jaWF0aXZlXSA9PT0gY29tbWFuZC5jbWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC5mdW5jKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGJ5ZSgpOnZvaWQge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGNoYWxrLnJlZChcbiAgICAgICAgICAgIGRpY3Rpb25hcnkuYnllXG4gICAgICAgIClcbiAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBleGVjKGNvbW1hbmQ6IHN0cmluZywgYXJndW1lbnRpOiBzdHJpbmdbXSA9IFtdKTogdm9pZCB7XG4gICAgICAgIGV4ZWNhKGNvbW1hbmQsIGFyZ3VtZW50aSwgeyBzdGRpbzogJ2luaGVyaXQnIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGdpdENsb25lKGNvbW1hbmQ6IHN0cmluZ1tdID0gW10pIHtcbiAgICAgICAgZXhlY2EoJ2dpdCcsIFsnY2xvbmUnLCAuLi5jb21tYW5kXSwgeyBzdGRpbzogJ2luaGVyaXQnIH0pXG4gICAgfVxufSJdfQ==