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
    value: function installAction() {
      this.cmd.list(this.installConfig);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOlsiQXBwIiwiQ21kIiwiYXNzb2NpYXRpdmUiLCJtZXNzYWdlIiwiZGljdGlvbmFyeSIsIndoYXREb1lvdVdhbnQiLCJjb21tYW5kcyIsImNtZCIsImZ1bmMiLCJpbmxpbmUiLCJzZW5kUHJvamVjdE5hbWUiLCJjb21tYW5kIiwiYnllIiwibGlzdCIsImluc3RhbGxDb25maWciLCJpbnRyb2R1Y2UiLCJtYWluUXVlc3Rpb24iLCJpbnN0YWxsQWN0aW9uIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7O0lBRWFBLEc7Ozs7OztpQ0FDSyxJQUFJQyxRQUFKLEU7OzJDQUMwQjtBQUNwQ0MsTUFBQUEsV0FBVyxFQUFFLFNBRHVCO0FBRXBDQyxNQUFBQSxPQUFPLEVBQUVDLGtCQUFXQyxhQUZnQjtBQUdwQ0MsTUFBQUEsUUFBUSxFQUFFLENBQ047QUFDSUMsUUFBQUEsR0FBRyxFQUFFLGVBRFQ7QUFFSUMsUUFBQUEsSUFBSSxFQUFFLGdCQUFNO0FBQ1IsVUFBQSxLQUFJLENBQUNELEdBQUwsQ0FBU0UsTUFBVCxDQUNJO0FBQ0lQLFlBQUFBLFdBQVcsRUFBRSxVQURqQjtBQUVJQyxZQUFBQSxPQUFPLEVBQUVDLGtCQUFXTSxlQUZ4QjtBQUdJQyxZQUFBQSxPQUFPLEVBQUU7QUFDTEosY0FBQUEsR0FBRyxFQUFFO0FBREE7QUFIYixXQURKO0FBUUg7QUFYTCxPQURNLEVBY047QUFDSUEsUUFBQUEsR0FBRyxFQUFFLGlCQURUO0FBRUlDLFFBQUFBLElBQUksRUFBRSxnQkFBTTtBQUNSLFVBQUEsS0FBSSxDQUFDRCxHQUFMLENBQVNFLE1BQVQsQ0FBZ0I7QUFDWlAsWUFBQUEsV0FBVyxFQUFFLFVBREQ7QUFFWkMsWUFBQUEsT0FBTyxFQUFFQyxrQkFBV00sZUFGUjtBQUdaQyxZQUFBQSxPQUFPLEVBQUU7QUFDTEosY0FBQUEsR0FBRyxFQUFFO0FBREE7QUFIRyxXQUFoQjtBQU9IO0FBVkwsT0FkTSxFQTBCTjtBQUNJQSxRQUFBQSxHQUFHLEVBQUUsa0JBRFQ7QUFFSUMsUUFBQUEsSUFBSSxFQUFFLGdCQUFNO0FBQ1IsVUFBQSxLQUFJLENBQUNELEdBQUwsQ0FBU0UsTUFBVCxDQUFnQjtBQUNaUCxZQUFBQSxXQUFXLEVBQUUsVUFERDtBQUVaQyxZQUFBQSxPQUFPLEVBQUVDLGtCQUFXTSxlQUZSO0FBR1pDLFlBQUFBLE9BQU8sRUFBRTtBQUNMSixjQUFBQSxHQUFHLEVBQUU7QUFEQTtBQUhHLFdBQWhCO0FBT0g7QUFWTCxPQTFCTSxFQXNDTjtBQUNJQSxRQUFBQSxHQUFHLEVBQUUsTUFEVDtBQUVJQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0QsR0FBTCxDQUFTSztBQUZuQixPQXRDTTtBQUgwQixLOzs7OztvQ0FnRGpCO0FBQ25CLFdBQUtMLEdBQUwsQ0FBU00sSUFBVCxDQUFjLEtBQUtDLGFBQW5CO0FBQ0g7OzswQkFFWTtBQUNULFdBQUtQLEdBQUwsQ0FBU1EsU0FBVDtBQUVBLFdBQUtSLEdBQUwsQ0FBU00sSUFBVCxDQUFjO0FBQ1ZYLFFBQUFBLFdBQVcsRUFBRSxNQURIO0FBRVZDLFFBQUFBLE9BQU8sRUFBRUMsa0JBQVdZLFlBRlY7QUFHVlYsUUFBQUEsUUFBUSxFQUFFLENBQ047QUFDSUMsVUFBQUEsR0FBRyxFQUFFLFNBRFQ7QUFFSUMsVUFBQUEsSUFBSSxFQUFFLEtBQUtTLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCO0FBRlYsU0FETSxFQUtOO0FBQ0lYLFVBQUFBLEdBQUcsRUFBRSxNQURUO0FBRUlDLFVBQUFBLElBQUksRUFBRSxLQUFLRCxHQUFMLENBQVNLO0FBRm5CLFNBTE07QUFIQSxPQUFkO0FBZUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaWN0aW9uYXJ5IH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IElDbWRMaXN0Q29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQ21kIH0gZnJvbSAnLi9jbWQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICBwcml2YXRlIGNtZCA9IG5ldyBDbWQoKTtcclxuICAgIHByaXZhdGUgaW5zdGFsbENvbmZpZzogSUNtZExpc3RDb25maWcgPSB7XHJcbiAgICAgICAgYXNzb2NpYXRpdmU6ICdpbnN0YWxsJyxcclxuICAgICAgICBtZXNzYWdlOiBkaWN0aW9uYXJ5LndoYXREb1lvdVdhbnQsXHJcbiAgICAgICAgY29tbWFuZHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY21kOiAnUmVhY3Qtc3RhcnRlcicsXHJcbiAgICAgICAgICAgICAgICBmdW5jOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbWQuaW5saW5lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGl2ZTogJ3Byb2puYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRpY3Rpb25hcnkuc2VuZFByb2plY3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtZDogJ2dpdC1jbG9uZSA9PiBodHRwczovL2dpdGh1Yi5jb20vQW5kZXJzRGVhdGgvb3dsLXJlYWN0LXN0YXJ0ZXIuZ2l0ICVuYW1lJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjbWQ6ICdBbmd1bGFyLXN0YXJ0ZXInLFxyXG4gICAgICAgICAgICAgICAgZnVuYzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY21kLmlubGluZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc29jaWF0aXZlOiAncHJvam5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkaWN0aW9uYXJ5LnNlbmRQcm9qZWN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY21kOiAnZ2l0LWNsb25lID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNEZWF0aC9vd2wtbmctc3RhcnRlci5naXQgJW5hbWUlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNtZDogJ1dlYnBhY2s0LXN0YXJ0ZXInLFxyXG4gICAgICAgICAgICAgICAgZnVuYzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY21kLmlubGluZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc29jaWF0aXZlOiAncHJvam5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkaWN0aW9uYXJ5LnNlbmRQcm9qZWN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY21kOiAnZ2l0LWNsb25lID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNEZWF0aC93ZWJwYWNrNC1wdWctc2Fzcy1pbWFnZXMtZm9udHMtc2FydGVyLmdpdCAlbmFtZSUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY21kOiAnZXhpdCcsXHJcbiAgICAgICAgICAgICAgICBmdW5jOiB0aGlzLmNtZC5ieWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5zdGFsbEFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNtZC5saXN0KHRoaXMuaW5zdGFsbENvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJ1bigpIHtcclxuICAgICAgICB0aGlzLmNtZC5pbnRyb2R1Y2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbWQubGlzdCh7XHJcbiAgICAgICAgICAgIGFzc29jaWF0aXZlOiAnaW5pdCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGRpY3Rpb25hcnkubWFpblF1ZXN0aW9uLFxyXG4gICAgICAgICAgICBjb21tYW5kczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNtZDogJ2luc3RhbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6IHRoaXMuaW5zdGFsbEFjdGlvbi5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNtZDogJ2V4aXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6IHRoaXMuY21kLmJ5ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==