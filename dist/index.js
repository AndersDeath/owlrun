#!/usr/bin/env node
 /** Version: 0.0.2 */
"use strict";

var _utils = require("./utils");

var _cmd = require("./cmd");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cmd = new _cmd.Cmd();

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    _defineProperty(this, "installConfig", {
      associative: 'install',
      message: _utils.dictionary.whatDoYouWant,
      commands: [{
        cmd: 'React-starter',
        func: function func() {
          cmd.inline({
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
          cmd.inline({
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
          cmd.inline({
            associative: 'projname',
            message: _utils.dictionary.sendProjectName,
            command: {
              cmd: 'git-clone => https://github.com/AndersDeath/webpack4-pug-sass-images-fonts-sarter.git %name%'
            }
          });
        }
      }, {
        cmd: 'exit',
        func: cmd.bye
      }]
    });
  }

  _createClass(App, [{
    key: "installAction",
    value: function installAction() {
      cmd.list(this.installConfig);
    }
  }, {
    key: "run",
    value: function run() {
      cmd.introduce();
      cmd.list({
        associative: 'init',
        message: _utils.dictionary.mainQuestion,
        commands: [{
          cmd: 'install',
          func: this.installAction.bind(this)
        }, {
          cmd: 'exit',
          func: cmd.bye
        }]
      });
    }
  }]);

  return App;
}();

var app = new App();
app.run();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJjbWQiLCJDbWQiLCJBcHAiLCJhc3NvY2lhdGl2ZSIsIm1lc3NhZ2UiLCJkaWN0aW9uYXJ5Iiwid2hhdERvWW91V2FudCIsImNvbW1hbmRzIiwiZnVuYyIsImlubGluZSIsInNlbmRQcm9qZWN0TmFtZSIsImNvbW1hbmQiLCJieWUiLCJsaXN0IiwiaW5zdGFsbENvbmZpZyIsImludHJvZHVjZSIsIm1haW5RdWVzdGlvbiIsImluc3RhbGxBY3Rpb24iLCJiaW5kIiwiYXBwIiwicnVuIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOzs7Ozs7Ozs7O0FBQ0EsSUFBTUEsR0FBRyxHQUFHLElBQUlDLFFBQUosRUFBWjs7SUFFTUMsRzs7OzsyQ0FFc0M7QUFDcENDLE1BQUFBLFdBQVcsRUFBRSxTQUR1QjtBQUVwQ0MsTUFBQUEsT0FBTyxFQUFFQyxrQkFBV0MsYUFGZ0I7QUFHcENDLE1BQUFBLFFBQVEsRUFBRSxDQUNOO0FBQ0lQLFFBQUFBLEdBQUcsRUFBRSxlQURUO0FBRUlRLFFBQUFBLElBQUksRUFBRSxnQkFBTTtBQUNSUixVQUFBQSxHQUFHLENBQUNTLE1BQUosQ0FDSTtBQUNJTixZQUFBQSxXQUFXLEVBQUUsVUFEakI7QUFFSUMsWUFBQUEsT0FBTyxFQUFFQyxrQkFBV0ssZUFGeEI7QUFHSUMsWUFBQUEsT0FBTyxFQUFFO0FBQ0xYLGNBQUFBLEdBQUcsRUFBRTtBQURBO0FBSGIsV0FESjtBQVFIO0FBWEwsT0FETSxFQWNOO0FBQ0lBLFFBQUFBLEdBQUcsRUFBRSxpQkFEVDtBQUVJUSxRQUFBQSxJQUFJLEVBQUUsZ0JBQU07QUFDUlIsVUFBQUEsR0FBRyxDQUFDUyxNQUFKLENBQVc7QUFDUE4sWUFBQUEsV0FBVyxFQUFFLFVBRE47QUFFUEMsWUFBQUEsT0FBTyxFQUFFQyxrQkFBV0ssZUFGYjtBQUdQQyxZQUFBQSxPQUFPLEVBQUU7QUFDTFgsY0FBQUEsR0FBRyxFQUFFO0FBREE7QUFIRixXQUFYO0FBT0g7QUFWTCxPQWRNLEVBMEJOO0FBQ0lBLFFBQUFBLEdBQUcsRUFBRSxrQkFEVDtBQUVJUSxRQUFBQSxJQUFJLEVBQUUsZ0JBQU07QUFDUlIsVUFBQUEsR0FBRyxDQUFDUyxNQUFKLENBQVc7QUFDUE4sWUFBQUEsV0FBVyxFQUFFLFVBRE47QUFFUEMsWUFBQUEsT0FBTyxFQUFFQyxrQkFBV0ssZUFGYjtBQUdQQyxZQUFBQSxPQUFPLEVBQUU7QUFDTFgsY0FBQUEsR0FBRyxFQUFFO0FBREE7QUFIRixXQUFYO0FBT0g7QUFWTCxPQTFCTSxFQXNDTjtBQUNJQSxRQUFBQSxHQUFHLEVBQUUsTUFEVDtBQUVJUSxRQUFBQSxJQUFJLEVBQUVSLEdBQUcsQ0FBQ1k7QUFGZCxPQXRDTTtBQUgwQixLOzs7OztvQ0FnRGpCO0FBQ25CWixNQUFBQSxHQUFHLENBQUNhLElBQUosQ0FBUyxLQUFLQyxhQUFkO0FBQ0g7OzswQkFFWTtBQUNUZCxNQUFBQSxHQUFHLENBQUNlLFNBQUo7QUFFQWYsTUFBQUEsR0FBRyxDQUFDYSxJQUFKLENBQVM7QUFDTFYsUUFBQUEsV0FBVyxFQUFFLE1BRFI7QUFFTEMsUUFBQUEsT0FBTyxFQUFFQyxrQkFBV1csWUFGZjtBQUdMVCxRQUFBQSxRQUFRLEVBQUUsQ0FDTjtBQUNJUCxVQUFBQSxHQUFHLEVBQUUsU0FEVDtBQUVJUSxVQUFBQSxJQUFJLEVBQUUsS0FBS1MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7QUFGVixTQURNLEVBS047QUFDSWxCLFVBQUFBLEdBQUcsRUFBRSxNQURUO0FBRUlRLFVBQUFBLElBQUksRUFBRVIsR0FBRyxDQUFDWTtBQUZkLFNBTE07QUFITCxPQUFUO0FBZUg7Ozs7OztBQUVMLElBQU1PLEdBQUcsR0FBRyxJQUFJakIsR0FBSixFQUFaO0FBS0FpQixHQUFHLENBQUNDLEdBQUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaWN0aW9uYXJ5IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBJQ21kTGlzdENvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBDbWQgfSBmcm9tICcuL2NtZCc7XG5jb25zdCBjbWQgPSBuZXcgQ21kKCk7XG5cbmNsYXNzIEFwcCB7XG5cbiAgICBwcml2YXRlIGluc3RhbGxDb25maWc6IElDbWRMaXN0Q29uZmlnID0ge1xuICAgICAgICBhc3NvY2lhdGl2ZTogJ2luc3RhbGwnLFxuICAgICAgICBtZXNzYWdlOiBkaWN0aW9uYXJ5LndoYXREb1lvdVdhbnQsXG4gICAgICAgIGNvbW1hbmRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY21kOiAnUmVhY3Qtc3RhcnRlcicsXG4gICAgICAgICAgICAgICAgZnVuYzogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbWQuaW5saW5lKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc29jaWF0aXZlOiAncHJvam5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRpY3Rpb25hcnkuc2VuZFByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY21kOiAnZ2l0LWNsb25lID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNEZWF0aC9vd2wtcmVhY3Qtc3RhcnRlci5naXQgJW5hbWUlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNtZDogJ0FuZ3VsYXItc3RhcnRlcicsXG4gICAgICAgICAgICAgICAgZnVuYzogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbWQuaW5saW5lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc29jaWF0aXZlOiAncHJvam5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGljdGlvbmFyeS5zZW5kUHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY21kOiAnZ2l0LWNsb25lID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNEZWF0aC9vd2wtbmctc3RhcnRlci5naXQgJW5hbWUlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNtZDogJ1dlYnBhY2s0LXN0YXJ0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY21kLmlubGluZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGl2ZTogJ3Byb2puYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRpY3Rpb25hcnkuc2VuZFByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtZDogJ2dpdC1jbG9uZSA9PiBodHRwczovL2dpdGh1Yi5jb20vQW5kZXJzRGVhdGgvd2VicGFjazQtcHVnLXNhc3MtaW1hZ2VzLWZvbnRzLXNhcnRlci5naXQgJW5hbWUlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNtZDogJ2V4aXQnLFxuICAgICAgICAgICAgICAgIGZ1bmM6IGNtZC5ieWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cblxuICAgIHB1YmxpYyBpbnN0YWxsQWN0aW9uKCkge1xuICAgICAgICBjbWQubGlzdCh0aGlzLmluc3RhbGxDb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBydW4oKSB7XG4gICAgICAgIGNtZC5pbnRyb2R1Y2UoKTtcblxuICAgICAgICBjbWQubGlzdCh7XG4gICAgICAgICAgICBhc3NvY2lhdGl2ZTogJ2luaXQnLFxuICAgICAgICAgICAgbWVzc2FnZTogZGljdGlvbmFyeS5tYWluUXVlc3Rpb24sXG4gICAgICAgICAgICBjb21tYW5kczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY21kOiAnaW5zdGFsbCcsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6IHRoaXMuaW5zdGFsbEFjdGlvbi5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNtZDogJ2V4aXQnLFxuICAgICAgICAgICAgICAgICAgICBmdW5jOiBjbWQuYnllXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgIH1cbn1cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcblxuXG5cblxuYXBwLnJ1bigpOyJdfQ==