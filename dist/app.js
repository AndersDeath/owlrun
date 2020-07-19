"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _utils = require("./utils");

var _cmd = require("./cmd");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Main class
 */
var App = /*#__PURE__*/function () {
  function App() {
    var _this = this;

    _classCallCheck(this, App);

    _defineProperty(this, "cmd", new _cmd.Cmd());

    _defineProperty(this, "installConfig", {
      associative: 'install',
      message: _utils.dictionary.whatDoYouWant,
      commands: [{
        cmd: 'React-starter',
        func: function func() {
          _this.cmd.inline({
            associative: 'projname',
            message: _utils.dictionary.sendProjectName,
            command: {
              cmd: 'git-clone => https://github.com/AndersDeath/owl-react-starter.git %name%'
            }
          });
        }
      }, {
        cmd: 'Angular-starter',
        func: function func() {
          _this.cmd.inline({
            associative: 'projname',
            message: _utils.dictionary.sendProjectName,
            command: {
              cmd: 'git-clone => https://github.com/AndersDeath/owl-ng-starter.git %name%'
            }
          });
        }
      }, {
        cmd: 'Webpack4-starter',
        func: function func() {
          _this.cmd.inline({
            associative: 'projname',
            message: _utils.dictionary.sendProjectName,
            command: {
              cmd: 'git-clone => https://github.com/AndersDeath/webpack4-pug-sass-images-fonts-sarter.git %name%'
            }
          });
        }
      }, {
        cmd: 'exit',
        func: this.cmd.bye
      }]
    });
  }

  _createClass(App, [{
    key: "installAction",

    /**
     * Build and show install astarters actions list
     */
    value: function installAction() {
      this.cmd.list(this.installConfig);
    }
    /**
     * Initial method
     */

  }, {
    key: "run",
    value: function run() {
      this.cmd.introduce();
      this.cmd.list({
        associative: 'init',
        message: _utils.dictionary.mainQuestion,
        commands: [{
          cmd: 'install',
          func: this.installAction.bind(this)
        }, {
          cmd: 'exit',
          func: this.cmd.bye
        }]
      });
    }
  }]);

  return App;
}();

exports.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOlsiQXBwIiwiQ21kIiwiYXNzb2NpYXRpdmUiLCJtZXNzYWdlIiwiZGljdGlvbmFyeSIsIndoYXREb1lvdVdhbnQiLCJjb21tYW5kcyIsImNtZCIsImZ1bmMiLCJpbmxpbmUiLCJzZW5kUHJvamVjdE5hbWUiLCJjb21tYW5kIiwiYnllIiwibGlzdCIsImluc3RhbGxDb25maWciLCJpbnRyb2R1Y2UiLCJtYWluUXVlc3Rpb24iLCJpbnN0YWxsQWN0aW9uIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7O0FBRUE7OztJQUdhQSxHOzs7Ozs7aUNBS0ssSUFBSUMsUUFBSixFOzsyQ0FLMEI7QUFDcENDLE1BQUFBLFdBQVcsRUFBRSxTQUR1QjtBQUVwQ0MsTUFBQUEsT0FBTyxFQUFFQyxrQkFBV0MsYUFGZ0I7QUFHcENDLE1BQUFBLFFBQVEsRUFBRSxDQUNOO0FBQ0lDLFFBQUFBLEdBQUcsRUFBRSxlQURUO0FBRUlDLFFBQUFBLElBQUksRUFBRSxnQkFBTTtBQUNSLFVBQUEsS0FBSSxDQUFDRCxHQUFMLENBQVNFLE1BQVQsQ0FDSTtBQUNJUCxZQUFBQSxXQUFXLEVBQUUsVUFEakI7QUFFSUMsWUFBQUEsT0FBTyxFQUFFQyxrQkFBV00sZUFGeEI7QUFHSUMsWUFBQUEsT0FBTyxFQUFFO0FBQ0xKLGNBQUFBLEdBQUcsRUFBRTtBQURBO0FBSGIsV0FESjtBQVFIO0FBWEwsT0FETSxFQWNOO0FBQ0lBLFFBQUFBLEdBQUcsRUFBRSxpQkFEVDtBQUVJQyxRQUFBQSxJQUFJLEVBQUUsZ0JBQU07QUFDUixVQUFBLEtBQUksQ0FBQ0QsR0FBTCxDQUFTRSxNQUFULENBQWdCO0FBQ1pQLFlBQUFBLFdBQVcsRUFBRSxVQUREO0FBRVpDLFlBQUFBLE9BQU8sRUFBRUMsa0JBQVdNLGVBRlI7QUFHWkMsWUFBQUEsT0FBTyxFQUFFO0FBQ0xKLGNBQUFBLEdBQUcsRUFBRTtBQURBO0FBSEcsV0FBaEI7QUFPSDtBQVZMLE9BZE0sRUEwQk47QUFDSUEsUUFBQUEsR0FBRyxFQUFFLGtCQURUO0FBRUlDLFFBQUFBLElBQUksRUFBRSxnQkFBTTtBQUNSLFVBQUEsS0FBSSxDQUFDRCxHQUFMLENBQVNFLE1BQVQsQ0FBZ0I7QUFDWlAsWUFBQUEsV0FBVyxFQUFFLFVBREQ7QUFFWkMsWUFBQUEsT0FBTyxFQUFFQyxrQkFBV00sZUFGUjtBQUdaQyxZQUFBQSxPQUFPLEVBQUU7QUFDTEosY0FBQUEsR0FBRyxFQUFFO0FBREE7QUFIRyxXQUFoQjtBQU9IO0FBVkwsT0ExQk0sRUFzQ047QUFDSUEsUUFBQUEsR0FBRyxFQUFFLE1BRFQ7QUFFSUMsUUFBQUEsSUFBSSxFQUFFLEtBQUtELEdBQUwsQ0FBU0s7QUFGbkIsT0F0Q007QUFIMEIsSzs7Ozs7O0FBZ0R4Qzs7O29DQUd1QjtBQUNuQixXQUFLTCxHQUFMLENBQVNNLElBQVQsQ0FBYyxLQUFLQyxhQUFuQjtBQUNIO0FBRUQ7Ozs7OzswQkFHYTtBQUNULFdBQUtQLEdBQUwsQ0FBU1EsU0FBVDtBQUVBLFdBQUtSLEdBQUwsQ0FBU00sSUFBVCxDQUFjO0FBQ1ZYLFFBQUFBLFdBQVcsRUFBRSxNQURIO0FBRVZDLFFBQUFBLE9BQU8sRUFBRUMsa0JBQVdZLFlBRlY7QUFHVlYsUUFBQUEsUUFBUSxFQUFFLENBQ047QUFDSUMsVUFBQUEsR0FBRyxFQUFFLFNBRFQ7QUFFSUMsVUFBQUEsSUFBSSxFQUFFLEtBQUtTLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCO0FBRlYsU0FETSxFQUtOO0FBQ0lYLFVBQUFBLEdBQUcsRUFBRSxNQURUO0FBRUlDLFVBQUFBLElBQUksRUFBRSxLQUFLRCxHQUFMLENBQVNLO0FBRm5CLFNBTE07QUFIQSxPQUFkO0FBZUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaWN0aW9uYXJ5IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBJQ21kTGlzdENvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBDbWQgfSBmcm9tICcuL2NtZCc7XG5cbi8qKlxuICogTWFpbiBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgQXBwIHtcblxuICAgIC8qKlxuICAgICAqIERlY2xhcmUgaW5zdGFuY2Ugb2YgY21kIGNsYXNzXG4gICAgICovXG4gICAgcHJpdmF0ZSBjbWQgPSBuZXcgQ21kKCk7XG5cbiAgICAvKipcbiAgICAgKiBDb25maWcgZm9yIHN0YXJ0ZXJzIGluc3RhbGxhdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgaW5zdGFsbENvbmZpZzogSUNtZExpc3RDb25maWcgPSB7XG4gICAgICAgIGFzc29jaWF0aXZlOiAnaW5zdGFsbCcsXG4gICAgICAgIG1lc3NhZ2U6IGRpY3Rpb25hcnkud2hhdERvWW91V2FudCxcbiAgICAgICAgY29tbWFuZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbWQ6ICdSZWFjdC1zdGFydGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY21kLmlubGluZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGl2ZTogJ3Byb2puYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkaWN0aW9uYXJ5LnNlbmRQcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtZDogJ2dpdC1jbG9uZSA9PiBodHRwczovL2dpdGh1Yi5jb20vQW5kZXJzRGVhdGgvb3dsLXJlYWN0LXN0YXJ0ZXIuZ2l0ICVuYW1lJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbWQ6ICdBbmd1bGFyLXN0YXJ0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbWQuaW5saW5lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc29jaWF0aXZlOiAncHJvam5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGljdGlvbmFyeS5zZW5kUHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY21kOiAnZ2l0LWNsb25lID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNEZWF0aC9vd2wtbmctc3RhcnRlci5naXQgJW5hbWUlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNtZDogJ1dlYnBhY2s0LXN0YXJ0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbWQuaW5saW5lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc29jaWF0aXZlOiAncHJvam5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGljdGlvbmFyeS5zZW5kUHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY21kOiAnZ2l0LWNsb25lID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNEZWF0aC93ZWJwYWNrNC1wdWctc2Fzcy1pbWFnZXMtZm9udHMtc2FydGVyLmdpdCAlbmFtZSUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY21kOiAnZXhpdCcsXG4gICAgICAgICAgICAgICAgZnVuYzogdGhpcy5jbWQuYnllXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhbmQgc2hvdyBpbnN0YWxsIGFzdGFydGVycyBhY3Rpb25zIGxpc3RcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFsbEFjdGlvbigpIHtcbiAgICAgICAgdGhpcy5jbWQubGlzdCh0aGlzLmluc3RhbGxDb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgbWV0aG9kXG4gICAgICovXG4gICAgcHVibGljIHJ1bigpIHtcbiAgICAgICAgdGhpcy5jbWQuaW50cm9kdWNlKCk7XG5cbiAgICAgICAgdGhpcy5jbWQubGlzdCh7XG4gICAgICAgICAgICBhc3NvY2lhdGl2ZTogJ2luaXQnLFxuICAgICAgICAgICAgbWVzc2FnZTogZGljdGlvbmFyeS5tYWluUXVlc3Rpb24sXG4gICAgICAgICAgICBjb21tYW5kczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY21kOiAnaW5zdGFsbCcsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6IHRoaXMuaW5zdGFsbEFjdGlvbi5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNtZDogJ2V4aXQnLFxuICAgICAgICAgICAgICAgICAgICBmdW5jOiB0aGlzLmNtZC5ieWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuIl19