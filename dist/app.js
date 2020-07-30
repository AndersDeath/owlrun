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

      _imports.yargs.command('install [projname]', 'clone the project', function (yargs) {// yargs
        //     .positional('projname', {
        //         describe: 'port to bind on',
        //         default: 5000
        //     })
      }, function (argv) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOlsiQXBwIiwiQ21kIiwiYXNzb2NpYXRpdmUiLCJtZXNzYWdlIiwiZGljdGlvbmFyeSIsIndoYXREb1lvdVdhbnQiLCJjb21tYW5kcyIsImNtZCIsImZ1bmMiLCJpbmxpbmUiLCJzZW5kUHJvamVjdE5hbWUiLCJjb21tYW5kIiwiYnllIiwibGlzdCIsImluc3RhbGxDb25maWciLCJpbnRyb2R1Y2UiLCJ5YXJncyIsImFyZ3YiLCJpbnN0YWxsIiwiY29uc29sZSIsImxvZyIsImluc3RhbGxBY3Rpb24iLCJoYW5kbGVyIiwibWFpblF1ZXN0aW9uIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztJQUdhQSxHOzs7Ozs7aUNBS0ssSUFBSUMsUUFBSixFOzsyQ0FLMEI7QUFDcENDLE1BQUFBLFdBQVcsRUFBRSxTQUR1QjtBQUVwQ0MsTUFBQUEsT0FBTyxFQUFFQyxrQkFBV0MsYUFGZ0I7QUFHcENDLE1BQUFBLFFBQVEsRUFBRSxDQUNOO0FBQ0lDLFFBQUFBLEdBQUcsRUFBRSxlQURUO0FBRUlDLFFBQUFBLElBQUksRUFBRSxnQkFBTTtBQUNSLFVBQUEsS0FBSSxDQUFDRCxHQUFMLENBQVNFLE1BQVQsQ0FDSTtBQUNJUCxZQUFBQSxXQUFXLEVBQUUsVUFEakI7QUFFSUMsWUFBQUEsT0FBTyxFQUFFQyxrQkFBV00sZUFGeEI7QUFHSUMsWUFBQUEsT0FBTyxFQUFFO0FBQ0xKLGNBQUFBLEdBQUcsRUFBRTtBQURBO0FBSGIsV0FESjtBQVFIO0FBWEwsT0FETSxFQWNOO0FBQ0lBLFFBQUFBLEdBQUcsRUFBRSxpQkFEVDtBQUVJQyxRQUFBQSxJQUFJLEVBQUUsZ0JBQU07QUFDUixVQUFBLEtBQUksQ0FBQ0QsR0FBTCxDQUFTRSxNQUFULENBQWdCO0FBQ1pQLFlBQUFBLFdBQVcsRUFBRSxVQUREO0FBRVpDLFlBQUFBLE9BQU8sRUFBRUMsa0JBQVdNLGVBRlI7QUFHWkMsWUFBQUEsT0FBTyxFQUFFO0FBQ0xKLGNBQUFBLEdBQUcsRUFBRTtBQURBO0FBSEcsV0FBaEI7QUFPSDtBQVZMLE9BZE0sRUEwQk47QUFDSUEsUUFBQUEsR0FBRyxFQUFFLGtCQURUO0FBRUlDLFFBQUFBLElBQUksRUFBRSxnQkFBTTtBQUNSLFVBQUEsS0FBSSxDQUFDRCxHQUFMLENBQVNFLE1BQVQsQ0FBZ0I7QUFDWlAsWUFBQUEsV0FBVyxFQUFFLFVBREQ7QUFFWkMsWUFBQUEsT0FBTyxFQUFFQyxrQkFBV00sZUFGUjtBQUdaQyxZQUFBQSxPQUFPLEVBQUU7QUFDTEosY0FBQUEsR0FBRyxFQUFFO0FBREE7QUFIRyxXQUFoQjtBQU9IO0FBVkwsT0ExQk0sRUFzQ047QUFDSUEsUUFBQUEsR0FBRyxFQUFFLE1BRFQ7QUFFSUMsUUFBQUEsSUFBSSxFQUFFLEtBQUtELEdBQUwsQ0FBU0s7QUFGbkIsT0F0Q007QUFIMEIsSzs7Ozs7O0FBZ0R4Qzs7O29DQUd1QjtBQUNuQixXQUFLTCxHQUFMLENBQVNNLElBQVQsQ0FBYyxLQUFLQyxhQUFuQjtBQUNIO0FBRUQ7Ozs7OzswQkFHYTtBQUFBOztBQUNULFdBQUtQLEdBQUwsQ0FBU1EsU0FBVDs7QUFDQSxVQUFJQyxlQUFNQyxJQUFOLENBQVdDLE9BQVgsS0FBdUIsSUFBM0IsRUFBaUM7QUFDN0JDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDSDs7QUFDREoscUJBQ0tMLE9BREwsQ0FDYSxvQkFEYixFQUNtQyxtQkFEbkMsRUFDd0QsVUFBQ0ssS0FBRCxFQUFnQixDQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsT0FQTCxFQU9PLFVBQUNDLElBQUQsRUFBZTtBQUNkLFFBQUEsTUFBSSxDQUFDSSxhQUFMO0FBQ0gsT0FUTCxFQVVLVixPQVZMLENBVWE7QUFBQ0EsUUFBQUEsT0FBTyxFQUFFLEdBQVY7QUFBZVcsUUFBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ25DLFVBQUEsTUFBSSxDQUFDZixHQUFMLENBQVNNLElBQVQsQ0FBYztBQUNWWCxZQUFBQSxXQUFXLEVBQUUsTUFESDtBQUVWQyxZQUFBQSxPQUFPLEVBQUVDLGtCQUFXbUIsWUFGVjtBQUdWakIsWUFBQUEsUUFBUSxFQUFFLENBQ047QUFDSUMsY0FBQUEsR0FBRyxFQUFFLFNBRFQ7QUFFSUMsY0FBQUEsSUFBSSxFQUFFLE1BQUksQ0FBQ2EsYUFBTCxDQUFtQkcsSUFBbkIsQ0FBd0IsTUFBeEI7QUFGVixhQURNLEVBS047QUFDSWpCLGNBQUFBLEdBQUcsRUFBRSxNQURUO0FBRUlDLGNBQUFBLElBQUksRUFBRSxNQUFJLENBQUNELEdBQUwsQ0FBU0s7QUFGbkIsYUFMTTtBQUhBLFdBQWQ7QUFjSDtBQWZRLE9BVmIsRUEwQktLLElBMUJMO0FBNEJIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGljdGlvbmFyeSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgSUNtZExpc3RDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQ21kIH0gZnJvbSAnLi9jbWQnO1xuaW1wb3J0IHsgeWFyZ3MgfSBmcm9tICcuL2ltcG9ydHMnO1xuXG4vKipcbiAqIE1haW4gY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIEFwcCB7XG5cbiAgICAvKipcbiAgICAgKiBEZWNsYXJlIGluc3RhbmNlIG9mIGNtZCBjbGFzc1xuICAgICAqL1xuICAgIHByaXZhdGUgY21kID0gbmV3IENtZCgpO1xuXG4gICAgLyoqXG4gICAgICogQ29uZmlnIGZvciBzdGFydGVycyBpbnN0YWxsYXRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGluc3RhbGxDb25maWc6IElDbWRMaXN0Q29uZmlnID0ge1xuICAgICAgICBhc3NvY2lhdGl2ZTogJ2luc3RhbGwnLFxuICAgICAgICBtZXNzYWdlOiBkaWN0aW9uYXJ5LndoYXREb1lvdVdhbnQsXG4gICAgICAgIGNvbW1hbmRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY21kOiAnUmVhY3Qtc3RhcnRlcicsXG4gICAgICAgICAgICAgICAgZnVuYzogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNtZC5pbmxpbmUoXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzb2NpYXRpdmU6ICdwcm9qbmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGljdGlvbmFyeS5zZW5kUHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbWQ6ICdnaXQtY2xvbmUgPT4gaHR0cHM6Ly9naXRodWIuY29tL0FuZGVyc0RlYXRoL293bC1yZWFjdC1zdGFydGVyLmdpdCAlbmFtZSUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY21kOiAnQW5ndWxhci1zdGFydGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY21kLmlubGluZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGl2ZTogJ3Byb2puYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRpY3Rpb25hcnkuc2VuZFByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtZDogJ2dpdC1jbG9uZSA9PiBodHRwczovL2dpdGh1Yi5jb20vQW5kZXJzRGVhdGgvb3dsLW5nLXN0YXJ0ZXIuZ2l0ICVuYW1lJScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbWQ6ICdXZWJwYWNrNC1zdGFydGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY21kLmlubGluZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGl2ZTogJ3Byb2puYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRpY3Rpb25hcnkuc2VuZFByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtZDogJ2dpdC1jbG9uZSA9PiBodHRwczovL2dpdGh1Yi5jb20vQW5kZXJzRGVhdGgvd2VicGFjazQtcHVnLXNhc3MtaW1hZ2VzLWZvbnRzLXNhcnRlci5naXQgJW5hbWUlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNtZDogJ2V4aXQnLFxuICAgICAgICAgICAgICAgIGZ1bmM6IHRoaXMuY21kLmJ5ZVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYW5kIHNob3cgaW5zdGFsbCBhc3RhcnRlcnMgYWN0aW9ucyBsaXN0XG4gICAgICovXG4gICAgcHVibGljIGluc3RhbGxBY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY21kLmxpc3QodGhpcy5pbnN0YWxsQ29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIG1ldGhvZFxuICAgICAqL1xuICAgIHB1YmxpYyBydW4oKSB7XG4gICAgICAgIHRoaXMuY21kLmludHJvZHVjZSgpO1xuICAgICAgICBpZiAoeWFyZ3MuYXJndi5pbnN0YWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUVdFUVdFV0UnKVxuICAgICAgICB9XG4gICAgICAgIHlhcmdzXG4gICAgICAgICAgICAuY29tbWFuZCgnaW5zdGFsbCBbcHJvam5hbWVdJywgJ2Nsb25lIHRoZSBwcm9qZWN0JywgKHlhcmdzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB5YXJnc1xuICAgICAgICAgICAgICAgIC8vICAgICAucG9zaXRpb25hbCgncHJvam5hbWUnLCB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBkZXNjcmliZTogJ3BvcnQgdG8gYmluZCBvbicsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBkZWZhdWx0OiA1MDAwXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICB9LCAoYXJndjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YWxsQWN0aW9uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNvbW1hbmQoe2NvbW1hbmQ6ICcqJywgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY21kLmxpc3Qoe1xuICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGl2ZTogJ2luaXQnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkaWN0aW9uYXJ5Lm1haW5RdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbWQ6ICdpbnN0YWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jOiB0aGlzLmluc3RhbGxBY3Rpb24uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbWQ6ICdleGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jOiB0aGlzLmNtZC5ieWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAuYXJndlxuXG4gICAgfVxufVxuIl19