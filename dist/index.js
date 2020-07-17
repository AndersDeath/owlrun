#!/usr/bin/env node
 /** Version: 0.0.1 */
"use strict";

var _imports = require("./imports");

var _utils = require("./utils");

var _cmd = require("./cmd");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: "run",
    value: function run() {
      cmd.introduce();
      cmd.list({
        associative: 'init',
        message: _utils.dictionary.mainQuestion,
        commands: [{
          cmd: 'install',
          func: installActionsFunc
        }, {
          cmd: 'exit',
          func: cmd.bye
        }]
      });
    }
  }]);

  return App;
}();

var cmd = new _cmd.Cmd();
var app = new App();

var inline = function inline(config) {
  _imports.inquirer.prompt([{
    type: "Input",
    name: config.associative,
    message: config.message
  }]).then(function (answers) {
    config.command.func(answers[config.associative]);
  });
};

var reactStarter = function reactStarter() {
  inline({
    associative: 'projname',
    message: _utils.dictionary.sendProjectName,
    command: {
      cmd: 'git-clone => https://github.com/AndersDeath/owl-react-starter.git %name%',
      func: function func(answer) {
        if (~this.cmd.indexOf('git-clone => ')) {
          cmd.gitClone(this.cmd.replace('git-clone => ', '').trim().replace('%name%', answer).split(' '));
        }
      }
    }
  });
};

var angularStarter = function angularStarter() {
  _imports.inquirer.prompt([{
    type: "Input",
    name: 'projname',
    message: 'Please send me a name of project!'
  }]).then(function (answers) {
    cmd.exec('git', ['clone', 'https://github.com/AndersDeath/owl-ng-starter.git', answers.projname]);
  });
};

var webpackStarter = function webpackStarter() {
  _imports.inquirer.prompt([{
    type: "Input",
    name: 'projname',
    message: 'Please send me a name of project!'
  }]).then(function (answers) {
    cmd.exec('git', ['clone', 'https://github.com/AndersDeath/webpack4-pug-sass-images-fonts-sarter.git', answers.projname]);
  });
};

var exit = function exit() {
  cmd.bye();
};

var gitConfigs = {
  associative: 'install',
  message: 'What do you want to install? ',
  commands: [{
    cmd: 'React-starter',
    func: reactStarter
  }, {
    cmd: 'Angular-starter',
    func: angularStarter
  }, {
    cmd: 'Webpack4-starter',
    func: webpackStarter
  }, {
    cmd: 'exit',
    func: exit
  }]
};

var installActionsFunc = function installActionsFunc() {
  cmd.list(gitConfigs);
};

app.run();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJBcHAiLCJjbWQiLCJpbnRyb2R1Y2UiLCJsaXN0IiwiYXNzb2NpYXRpdmUiLCJtZXNzYWdlIiwiZGljdGlvbmFyeSIsIm1haW5RdWVzdGlvbiIsImNvbW1hbmRzIiwiZnVuYyIsImluc3RhbGxBY3Rpb25zRnVuYyIsImJ5ZSIsIkNtZCIsImFwcCIsImlubGluZSIsImNvbmZpZyIsImlucXVpcmVyIiwicHJvbXB0IiwidHlwZSIsIm5hbWUiLCJ0aGVuIiwiYW5zd2VycyIsImNvbW1hbmQiLCJyZWFjdFN0YXJ0ZXIiLCJzZW5kUHJvamVjdE5hbWUiLCJhbnN3ZXIiLCJpbmRleE9mIiwiZ2l0Q2xvbmUiLCJyZXBsYWNlIiwidHJpbSIsInNwbGl0IiwiYW5ndWxhclN0YXJ0ZXIiLCJleGVjIiwicHJvam5hbWUiLCJ3ZWJwYWNrU3RhcnRlciIsImV4aXQiLCJnaXRDb25maWdzIiwicnVuIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBOzs7Ozs7OztJQUdNQSxHOzs7Ozs7OzBCQUNXO0FBQ1RDLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSjtBQUVBRCxNQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBUztBQUNMQyxRQUFBQSxXQUFXLEVBQUUsTUFEUjtBQUVMQyxRQUFBQSxPQUFPLEVBQUVDLGtCQUFXQyxZQUZmO0FBR0xDLFFBQUFBLFFBQVEsRUFBRSxDQUNOO0FBQ0lQLFVBQUFBLEdBQUcsRUFBRSxTQURUO0FBRUlRLFVBQUFBLElBQUksRUFBRUM7QUFGVixTQURNLEVBS047QUFDSVQsVUFBQUEsR0FBRyxFQUFFLE1BRFQ7QUFFSVEsVUFBQUEsSUFBSSxFQUFFUixHQUFHLENBQUNVO0FBRmQsU0FMTTtBQUhMLE9BQVQ7QUFlSDs7Ozs7O0FBR0wsSUFBTVYsR0FBRyxHQUFHLElBQUlXLFFBQUosRUFBWjtBQUNBLElBQU1DLEdBQUcsR0FBRyxJQUFJYixHQUFKLEVBQVo7O0FBRUEsSUFBTWMsTUFBTSxHQUFHLFNB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QUZWLEdBVE0sRUFhTjtBQUNJakMsSUFBQUEsR0FBRyxFQUFFLE1BRFQ7QUFFSVEsSUFBQUEsSUFBSSxFQUFFMEI7QUFGVixHQWJNO0FBSHFCLENBQW5DOztBQXVCQSxJQUFNekIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFZO0FBQ25DVCxFQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBU2lDLFVBQVQ7QUFDSCxDQUZEOztBQVFBdkIsR0FBRyxDQUFDd0IsR0FBSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlucXVpcmVyIH0gZnJvbSAnLi9pbXBvcnRzJztcbmltcG9ydCB7IGRpY3Rpb25hcnkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IElDbWRMaXN0Q29uZmlnLCBJQ21kQ29tbWFuZENvbmZpZywgSUNtZElucHV0Q29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IENtZCB9IGZyb20gJy4vY21kJztcblxuXG5jbGFzcyBBcHAge1xuICAgIHB1YmxpYyBydW4oKSB7XG4gICAgICAgIGNtZC5pbnRyb2R1Y2UoKTtcblxuICAgICAgICBjbWQubGlzdCh7XG4gICAgICAgICAgICBhc3NvY2lhdGl2ZTogJ2luaXQnLFxuICAgICAgICAgICAgbWVzc2FnZTogZGljdGlvbmFyeS5tYWluUXVlc3Rpb24sXG4gICAgICAgICAgICBjb21tYW5kczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY21kOiAnaW5zdGFsbCcsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6IGluc3RhbGxBY3Rpb25zRnVuY1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbWQ6ICdleGl0JyxcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogY21kLmJ5ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICB9XG59XG5cbmNvbnN0IGNtZCA9IG5ldyBDbWQoKTtcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcblxuY29uc3QgaW5saW5lID0gKGNvbmZpZzpJQ21kSW5wdXRDb25maWcpID0+IHtcbiAgICBpbnF1aXJlclxuICAgICAgICAucHJvbXB0KFt7IHR5cGU6IFwiSW5wdXRcIiwgbmFtZTogY29uZmlnLmFzc29jaWF0aXZlLCBtZXNzYWdlOiBjb25maWcubWVzc2FnZSB9XSlcbiAgICAgICAgLnRoZW4oKGFuc3dlcnM6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uZmlnLmNvbW1hbmQuZnVuYyhhbnN3ZXJzW2NvbmZpZy5hc3NvY2lhdGl2ZV0pO1xuICAgICAgICB9KTtcbn1cblxuXG5jb25zdCByZWFjdFN0YXJ0ZXIgPSAoKSA9PiB7XG4gICAgaW5saW5lKFxuICAgICAgICB7XG4gICAgICAgIGFzc29jaWF0aXZlOiAncHJvam5hbWUnLFxuICAgICAgICBtZXNzYWdlOiBkaWN0aW9uYXJ5LnNlbmRQcm9qZWN0TmFtZSxcbiAgICAgICAgY29tbWFuZDoge1xuICAgICAgICAgICAgY21kOiAnZ2l0LWNsb25lID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNEZWF0aC9vd2wtcmVhY3Qtc3RhcnRlci5naXQgJW5hbWUlJyxcbiAgICAgICAgICAgIGZ1bmM6IGZ1bmN0aW9uKGFuc3dlcjogYW55KTogdm9pZCB7XG4gICAgICAgICAgICAgICAgaWYofnRoaXMuY21kLmluZGV4T2YoJ2dpdC1jbG9uZSA9PiAnKSkge1xuICAgICAgICAgICAgICAgICAgICBjbWQuZ2l0Q2xvbmUodGhpcy5jbWQucmVwbGFjZSgnZ2l0LWNsb25lID0+ICcsICcnKS50cmltKCkucmVwbGFjZSgnJW5hbWUlJywgYW5zd2VyKS5zcGxpdCgnICcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgfSlcbn1cbmNvbnN0IGFuZ3VsYXJTdGFydGVyID0gKCkgPT4ge1xuICAgIGlucXVpcmVyXG4gICAgICAgIC5wcm9tcHQoW3sgdHlwZTogXCJJbnB1dFwiLCBuYW1lOiAncHJvam5hbWUnLCBtZXNzYWdlOiAnUGxlYXNlIHNlbmQgbWUgYSBuYW1lIG9mIHByb2plY3QhJyB9XSlcbiAgICAgICAgLnRoZW4oKGFuc3dlcnM6IGFueSkgPT4ge1xuICAgICAgICAgICAgY21kLmV4ZWMoJ2dpdCcsIFsnY2xvbmUnLCAnaHR0cHM6Ly9naXRodWIuY29tL0FuZGVyc0RlYXRoL293bC1uZy1zdGFydGVyLmdpdCcsIGFuc3dlcnMucHJvam5hbWVdKTtcbiAgICAgICAgfSk7XG59XG5jb25zdCB3ZWJwYWNrU3RhcnRlciA9ICgpID0+IHtcbiAgICBpbnF1aXJlclxuICAgICAgICAucHJvbXB0KFt7IHR5cGU6IFwiSW5wdXRcIiwgbmFtZTogJ3Byb2puYW1lJywgbWVzc2FnZTogJ1BsZWFzZSBzZW5kIG1lIGEgbmFtZSBvZiBwcm9qZWN0IScgfV0pXG4gICAgLnRoZW4oKGFuc3dlcnM6IGFueSkgPT4ge1xuICAgICAgICBjbWQuZXhlYygnZ2l0JywgWydjbG9uZScsICdodHRwczovL2dpdGh1Yi5jb20vQW5kZXJzRGVhdGgvd2VicGFjazQtcHVnLXNhc3MtaW1hZ2VzLWZvbnRzLXNhcnRlci5naXQnLCBhbnN3ZXJzLnByb2puYW1lXSk7XG4gICAgfSk7XG59XG5jb25zdCBleGl0ID0gKCkgPT4geyBjbWQuYnllKCk7IH1cblxuY29uc3QgZ2l0Q29uZmlnczogSUNtZExpc3RDb25maWcgPSB7XG4gICAgYXNzb2NpYXRpdmU6ICdpbnN0YWxsJyxcbiAgICBtZXNzYWdlOiAnV2hhdCBkbyB5b3Ugd2FudCB0byBpbnN0YWxsPyAnLFxuICAgIGNvbW1hbmRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNtZDogJ1JlYWN0LXN0YXJ0ZXInLFxuICAgICAgICAgICAgZnVuYzogcmVhY3RTdGFydGVyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNtZDogJ0FuZ3VsYXItc3RhcnRlcicsXG4gICAgICAgICAgICBmdW5jOiBhbmd1bGFyU3RhcnRlclxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjbWQ6ICdXZWJwYWNrNC1zdGFydGVyJyxcbiAgICAgICAgICAgIGZ1bmM6IHdlYnBhY2tTdGFydGVyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNtZDogJ2V4aXQnLFxuICAgICAgICAgICAgZnVuYzogZXhpdFxuICAgICAgICB9XG4gICAgXVxufVxuXG5jb25zdCBpbnN0YWxsQWN0aW9uc0Z1bmMgPSAoKTogdm9pZCA9PiB7XG4gICAgY21kLmxpc3QoZ2l0Q29uZmlncyk7XG59XG5cblxuXG5cblxuYXBwLnJ1bigpOyJdfQ==