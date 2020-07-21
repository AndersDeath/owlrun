"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _utils = require("./utils");

var _cmd = require("./cmd");

var _imports = require("./imports");

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
      var _this2 = this;

      this.cmd.introduce();

      if (_imports.yargs.argv.install === true) {
        console.log('QWEQWEWE');
      }

      _imports.yargs.command('install [port]', 'start the server', function (yargs) {
        yargs.positional('port', {
          describe: 'port to bind on',
          "default": 5000
        });
      }, function (argv) {
        // console.log(argv);
        _this2.installAction();
      }).command({
        command: '*',
        handler: function handler() {
          _this2.cmd.list({
            associative: 'init',
            message: _utils.dictionary.mainQuestion,
            commands: [{
              cmd: 'install',
              func: _this2.installAction.bind(_this2)
            }, {
              cmd: 'exit',
              func: _this2.cmd.bye
            }]
          });
        }
      }).argv;
    }
  }]);

  return App;
}();

exports.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOlsiQXBwIiwiQ21kIiwiYXNzb2NpYXRpdmUiLCJtZXNzYWdlIiwiZGljdGlvbmFyeSIsIndoYXREb1lvdVdhbnQiLCJjb21tYW5kcyIsImNtZCIsImZ1bmMiLCJpbmxpbmUiLCJzZW5kUHJvamVjdE5hbWUiLCJjb21tYW5kIiwiYnllIiwibGlzdCIsImluc3RhbGxDb25maWciLCJpbnRyb2R1Y2UiLCJ5YXJncyIsImFyZ3YiLCJpbnN0YWxsIiwiY29uc29sZSIsImxvZyIsInBvc2l0aW9uYWwiLCJkZXNjcmliZSIsImluc3RhbGxBY3Rpb24iLCJoYW5kbGVyIiwibWFpblF1ZXN0aW9uIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztJQUdhQSxHOzs7Ozs7aUNBS0ssSUFBSUMsUUFBSixFOzsyQ0FLMEI7QUFDcENDLE1BQUFBLFdBQVcsRUFBRSxTQUR1QjtBQUVwQ0MsTUFBQUEsT0FBTyxFQUFFQyxrQkFBV0MsYUFGZ0I7QUFHcENDLE1BQUFBLFFBQVEsRUFBRSxDQUNOO0FBQ0lDLFFBQUFBLEdBQUcsRUFBRSxlQURUO0FBRUlDLFFBQUFBLElBQUksRUFBRSxnQkFBTTtBQUNSLFVBQUEsS0FBSSxDQUFDRCxHQUFMLENBQVNFLE1BQVQsQ0FDSTtBQUNJUCxZQUFBQSxXQUFXLEVBQUUsVUFEakI7QUFFSUMsWUFBQUEsT0FBTyxFQUFFQyxrQkFBV00sZUFGeEI7QUFHSUMsWUFBQUEsT0FBTyxFQUFFO0FBQ0xKLGNBQUFBLEdBQUcsRUFBRTtBQURBO0FBSGIsV0FESjtBQVFIO0FBWEwsT0FETSxFQWNOO0FBQ0lBLFFBQUFBLEdBQUcsRUFBRSxpQkFEVDtBQUVJQyxRQUFBQSxJQUFJLEVBQUUsZ0JBQU07QUFDUixVQUFBLEtBQUksQ0FBQ0QsR0FBTCxDQUFTRSxNQUFULENBQWdCO0FBQ1pQLFlBQUFBLFdBQVcsRUFBRSxVQUREO0FBRVpDLFlBQUFBLE9BQU8sRUFBRUMsa0JBQVdNLGVBRlI7QUFHWkMsWUFBQUEsT0FBTyxFQUFFO0FBQ0xKLGNBQUFBLEdBQUcsRUFBRTtBQURBO0FBSEcsV0FBaEI7QUFPSDtBQVZMLE9BZE0sRUEwQk47QUFDSUEsUUFBQUEsR0FBRyxFQUFFLGtCQURUO0FBRUlDLFFBQUFBLElBQUksRUFBRSxnQkFBTTtBQUNSLFVBQUEsS0FBSSxDQUFDRCxHQUFMLENBQVNFLE1BQVQsQ0FBZ0I7QUFDWlAsWUFBQUEsV0FBVyxFQUFFLFVBREQ7QUFFWkMsWUFBQUEsT0FBTyxFQUFFQyxrQkFBV00sZUFGUjtBQUdaQyxZQUFBQSxPQUFPLEVBQUU7QUFDTEosY0FBQUEsR0FBRyxFQUFFO0FBREE7QUFIRyxXQUFoQjtBQU9IO0FBVkwsT0ExQk0sRUFzQ047QUFDSUEsUUFBQUEsR0FBRyxFQUFFLE1BRFQ7QUFFSUMsUUFBQUEsSUFBSSxFQUFFLEtBQUtELEdBQUwsQ0FBU0s7QUFGbkIsT0F0Q007QUFIMEIsSzs7Ozs7O0FBZ0R4Qzs7O29DQUd1QjtBQUNuQixXQUFLTCxHQUFMLENBQVNNLElBQVQsQ0FBYyxLQUFLQyxhQUFuQjtBQUNIO0FBRUQ7Ozs7OzswQkFHYTtBQUFBOztBQUNULFdBQUtQLEdBQUwsQ0FBU1EsU0FBVDs7QUFDQSxVQUFJQyxlQUFNQyxJQUFOLENBQVdDLE9BQVgsS0FBdUIsSUFBM0IsRUFBaUM7QUFDN0JDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDSDs7QUFDREoscUJBQ0tMLE9BREwsQ0FDYSxnQkFEYixFQUMrQixrQkFEL0IsRUFDbUQsVUFBQ0ssS0FBRCxFQUFnQjtBQUMzREEsUUFBQUEsS0FBSyxDQUNBSyxVQURMLENBQ2dCLE1BRGhCLEVBQ3dCO0FBQ2hCQyxVQUFBQSxRQUFRLEVBQUUsaUJBRE07QUFFaEIscUJBQVM7QUFGTyxTQUR4QjtBQUtILE9BUEwsRUFPTyxVQUFDTCxJQUFELEVBQWU7QUFDZDtBQUNBLFFBQUEsTUFBSSxDQUFDTSxhQUFMO0FBQ0gsT0FWTCxFQVdLWixPQVhMLENBV2E7QUFBQ0EsUUFBQUEsT0FBTyxFQUFFLEdBQVY7QUFBZWEsUUFBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ25DLFVBQUEsTUFBSSxDQUFDakIsR0FBTCxDQUFTTSxJQUFULENBQWM7QUFDVlgsWUFBQUEsV0FBVyxFQUFFLE1BREg7QUFFVkMsWUFBQUEsT0FBTyxFQUFFQyxrQkFBV3FCLFlBRlY7QUFHVm5CLFlBQUFBLFFBQVEsRUFBRSxDQUNOO0FBQ0lDLGNBQUFBLEdBQUcsRUFBRSxTQURUO0FBRUlDLGNBQUFBLElBQUksRUFBRSxNQUFJLENBQUNlLGFBQUwsQ0FBbUJHLElBQW5CLENBQXdCLE1BQXhCO0FBRlYsYUFETSxFQUtOO0FBQ0luQixjQUFBQSxHQUFHLEVBQUUsTUFEVDtBQUVJQyxjQUFBQSxJQUFJLEVBQUUsTUFBSSxDQUFDRCxHQUFMLENBQVNLO0FBRm5CLGFBTE07QUFIQSxXQUFkO0FBY0g7QUFmUSxPQVhiLEVBMkJLSyxJQTNCTDtBQTZCSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpY3Rpb25hcnkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IElDbWRMaXN0Q29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IENtZCB9IGZyb20gJy4vY21kJztcbmltcG9ydCB7IHlhcmdzIH0gZnJvbSAnLi9pbXBvcnRzJztcblxuLyoqXG4gKiBNYWluIGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHAge1xuXG4gICAgLyoqXG4gICAgICogRGVjbGFyZSBpbnN0YW5jZSBvZiBjbWQgY2xhc3NcbiAgICAgKi9cbiAgICBwcml2YXRlIGNtZCA9IG5ldyBDbWQoKTtcblxuICAgIC8qKlxuICAgICAqIENvbmZpZyBmb3Igc3RhcnRlcnMgaW5zdGFsbGF0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbnN0YWxsQ29uZmlnOiBJQ21kTGlzdENvbmZpZyA9IHtcbiAgICAgICAgYXNzb2NpYXRpdmU6ICdpbnN0YWxsJyxcbiAgICAgICAgbWVzc2FnZTogZGljdGlvbmFyeS53aGF0RG9Zb3VXYW50LFxuICAgICAgICBjb21tYW5kczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNtZDogJ1JlYWN0LXN0YXJ0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbWQuaW5saW5lKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc29jaWF0aXZlOiAncHJvam5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRpY3Rpb25hcnkuc2VuZFByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY21kOiAnZ2l0LWNsb25lID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNEZWF0aC9vd2wtcmVhY3Qtc3RhcnRlci5naXQgJW5hbWUlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNtZDogJ0FuZ3VsYXItc3RhcnRlcicsXG4gICAgICAgICAgICAgICAgZnVuYzogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNtZC5pbmxpbmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzb2NpYXRpdmU6ICdwcm9qbmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkaWN0aW9uYXJ5LnNlbmRQcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbWQ6ICdnaXQtY2xvbmUgPT4gaHR0cHM6Ly9naXRodWIuY29tL0FuZGVyc0RlYXRoL293bC1uZy1zdGFydGVyLmdpdCAlbmFtZSUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY21kOiAnV2VicGFjazQtc3RhcnRlcicsXG4gICAgICAgICAgICAgICAgZnVuYzogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNtZC5pbmxpbmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzb2NpYXRpdmU6ICdwcm9qbmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkaWN0aW9uYXJ5LnNlbmRQcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbWQ6ICdnaXQtY2xvbmUgPT4gaHR0cHM6Ly9naXRodWIuY29tL0FuZGVyc0RlYXRoL3dlYnBhY2s0LXB1Zy1zYXNzLWltYWdlcy1mb250cy1zYXJ0ZXIuZ2l0ICVuYW1lJScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbWQ6ICdleGl0JyxcbiAgICAgICAgICAgICAgICBmdW5jOiB0aGlzLmNtZC5ieWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGFuZCBzaG93IGluc3RhbGwgYXN0YXJ0ZXJzIGFjdGlvbnMgbGlzdFxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YWxsQWN0aW9uKCkge1xuICAgICAgICB0aGlzLmNtZC5saXN0KHRoaXMuaW5zdGFsbENvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBtZXRob2RcbiAgICAgKi9cbiAgICBwdWJsaWMgcnVuKCkge1xuICAgICAgICB0aGlzLmNtZC5pbnRyb2R1Y2UoKTtcbiAgICAgICAgaWYgKHlhcmdzLmFyZ3YuaW5zdGFsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1FXRVFXRVdFJylcbiAgICAgICAgfVxuICAgICAgICB5YXJnc1xuICAgICAgICAgICAgLmNvbW1hbmQoJ2luc3RhbGwgW3BvcnRdJywgJ3N0YXJ0IHRoZSBzZXJ2ZXInLCAoeWFyZ3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgICAgIC5wb3NpdGlvbmFsKCdwb3J0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpYmU6ICdwb3J0IHRvIGJpbmQgb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogNTAwMFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgKGFyZ3Y6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFyZ3YpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFsbEFjdGlvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jb21tYW5kKHtjb21tYW5kOiAnKicsIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNtZC5saXN0KHtcbiAgICAgICAgICAgICAgICAgICAgYXNzb2NpYXRpdmU6ICdpbml0JyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGljdGlvbmFyeS5tYWluUXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY21kOiAnaW5zdGFsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuYzogdGhpcy5pbnN0YWxsQWN0aW9uLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY21kOiAnZXhpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuYzogdGhpcy5jbWQuYnllXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19KVxuICAgICAgICAgICAgLmFyZ3ZcblxuICAgIH1cbn1cbiJdfQ==