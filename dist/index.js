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

var reactStarter = function reactStarter() {
  _imports.inquirer.prompt([{
    type: "Input",
    name: 'projname',
    message: 'Please send me a name of project!'
  }]).then(function (answers) {
    cmd.exec('git', ['clone', 'https://github.com/AndersDeath/owl-react-starter.git', answers.projname]);
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
  cmd.list(gitConfigs); // inquirer.prompt([{
  //     type: 'list',
  //     name: 'install',
  //     message: 'What do you want to install? ',
  //     choices: ['React-starter', 'Angular-starter', 'Webpack4-starter', 'exit']
  // }]).then((e: any) => {
  //     if (e.install === 'React-starter') {
  //         inquirer
  //             .prompt([{ type: "Input", name: 'projname', message: 'Please send me a name of project!' }])
  //             .then((answers: any) => {
  //                 cmd.exec('git', ['clone', 'https://github.com/AndersDeath/owl-react-starter.git', answers.projname]);
  //             });
  //     }
  //     if (e.install === 'Angular-starter') {
  //         inquirer
  //             .prompt([{ type: "Input", name: 'projname', message: 'Please send me a name of project!' }])
  //             .then((answers: any) => {
  //                 cmd.exec('git', ['clone', 'https://github.com/AndersDeath/owl-ng-starter.git', answers.projname]);
  //             });
  //     }
  //     if (e.install === 'Webpack4-starter') {
  //         inquirer
  //             .prompt([{ type: "Input", name: 'projname', message: 'Please send me a name of project!' }])
  //             .then((answers: any) => {
  //                 cmd.exec('git', ['clone', 'https://github.com/AndersDeath/webpack4-pug-sass-images-fonts-sarter.git', answers.projname]);
  //             });
  //     }
  //     if (e.install === 'exit') {
  //         cmd.bye();
  //     }
  // });
};

app.run();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJBcHAiLCJjbWQiLCJpbnRyb2R1Y2UiLCJsaXN0IiwiYXNzb2NpYXRpdmUiLCJtZXNzYWdlIiwiZGljdGlvbmFyeSIsIm1haW5RdWVzdGlvbiIsImNvbW1hbmRzIiwiZnVuYyIsImluc3RhbGxBY3Rpb25zRnVuYyIsImJ5ZSIsIkNtZCIsImFwcCIsInJlYWN0U3RhcnRlciIsImlucXVpcmVyIiwicHJvbXB0IiwidHlwZSIsIm5hbWUiLCJ0aGVuIiwiYW5zd2VycyIsImV4ZWMiLCJwcm9qbmFtZSIsImFuZ3VsYXJTdGFydGVyIiwid2VicGFja1N0YXJ0ZXIiLCJleGl0IiwiZ2l0Q29uZmlncyIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7SUFHTUEsRzs7Ozs7OzswQkFDVztBQUNqQkMsTUFBQUEsR0FBRyxDQUFDQyxTQUFKO0FBRUFELE1BQUFBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTO0FBQ0RDLFFBQUFBLFdBQVcsRUFBRSxNQURaO0FBRURDLFFBQUFBLE9BQU8sRUFBRUMsa0JBQVdDLFlBRm5CO0FBR0RDLFFBQUFBLFFBQVEsRUFBRSxDQUNOO0FBQ0lQLFVBQUFBLEdBQUcsRUFBRSxTQURUO0FBRUlRLFVBQUFBLElBQUksRUFBRUM7QUFGVixTQURNLEVBS047QUFDSVQsVUFBQUEsR0FBRyxFQUFFLE1BRFQ7QUFFSVEsVUFBQUEsSUFBSSxFQUFFUixHQUFHLENBQUNVO0FBRmQsU0FMTTtBQUhULE9BQVQ7QUFlSzs7Ozs7O0FBR0wsSUFBTVYsR0FBRyxHQUFHLElBQUlXLFFBQUosRUFBWjtBQUNBLElBQU1DLEdBQUcsR0FBRyxJQUFJYixHQUFKLEVBQVo7O0FBR0EsSUFBTWMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUVYQyxvQkFDQ0MsTUFERCxDQUNRLENBQUM7QUFBRUMsSUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLElBQUFBLElBQUksRUFBRSxVQUF2QjtBQUFtQ2IsSUFBQUEsT0FBTyxFQUFFO0FBQTVDLEdBQUQsQ0FEUixFQUVDYyxJQUZELENBRU0sVUFBQ0MsT0FBRCxFQUFrQjtBQUNwQm5CLElBQUFBLEdBQUcsQ0FBQ29CLElBQUosQ0FBUyxLQUFULEVBQWdCLENBQUMsT0FBRCxFQUFVLHNEQUFWLEVBQWtFRCxPQUFPLENBQUNFLFFBQTFFLENBQWhCO0FBQ0gsR0FKRDtBQUtmLENBUEQ7O0FBUUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3ZCUixvQkFDV0MsTUFEWCxDQUNrQixDQUFDO0FBQUVDLElBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCQyxJQUFBQSxJQUFJLEVBQUUsVUFBdkI7QUFBbUNiLElBQUFBLE9BQU8sRUFBRTtBQUE1QyxHQUFELENBRGxCLEVBRVdjLElBRlgsQ0FFZ0IsVUFBQ0MsT0FBRCxFQUFrQjtBQUNwQm5CLElBQUFBLEdBQUcsQ0FBQ29CLElBQUosQ0FBUyxLQUFULEVBQWdCLENBQUMsT0FBRCxFQUFVLG1EQUFWLEVBQStERCxPQUFPLENBQUNFLFFBQXZFLENBQWhCO0FBQ0gsR0FKWDtBQUtMLENBTkQ7O0FBT0EsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUlULG9CQUNoQkMsTUFEZ0IsQ0FDVCxDQUFDO0FBQUVDLElBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCQyxJQUFBQSxJQUFJLEVBQUUsVUFBdkI7QUFBbUNiLElBQUFBLE9BQU8sRUFBRTtBQUE1QyxHQUFELENBRFMsRUFFaEJjLElBRmdCLENBRVgsVUFBQ0MsT0FBRCxFQUFrQjtBQUNwQm5CLElBQUFBLEdBQUcsQ0FBQ29CLElBQUosQ0FBUyxLQUFULEVBQWdCLENBQUMsT0FBRCxFQUFVLDBFQUFWLEVBQXNGRCxPQUFPLENBQUNFLFFBQTlGLENBQWhCO0FBQ0gsR0FKZ0I7QUFJYixDQUpwQjs7QUFLQSxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUt4QixFQUFBQSxHQUFHLENBQUNVLEdBQUo7QUFBVyxDQUFuQzs7QUFFQSxJQUFNZSxVQUEwQixHQUFHO0FBQy9CdEIsRUFBQUEsV0FBVyxFQUFFLFNBRGtCO0FBRS9CQyxFQUFBQSxPQUFPLEVBQUUsK0JBRnNCO0FBRy9CRyxFQUFBQSxRQUFRLEVBQUUsQ0FDTjtBQUNJUCxJQUFBQSxHQUFHLEVBQUUsZUFEVDtBQUVJUSxJQUFBQSxJQUFJLEVBQUVLO0FBRlYsR0FETSxFQUtOO0FBQ0liLElBQUFBLEdBQUcsRUFBRSxpQkFEVDtBQUVJUSxJQUFBQSxJQUFJLEVBQUVjO0FBRlYsR0FMTSxFQVNOO0FBQ0l0QixJQUFBQSxHQUFHLEVBQUUsa0JBRFQ7QUFFSVEsSUFBQUEsSUFBSSxFQUFFZTtBQUZWLEdBVE0sRUFhTjtBQUNJdkIsSUFBQUEsR0FBRyxFQUFFLE1BRFQ7QUFFSVEsSUFBQUEsSUFBSSxFQUFFZ0I7QUFGVixHQWJNO0FBSHFCLENBQW5DOztBQXVCQSxJQUFNZixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQVk7QUFDbkNULEVBQUFBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTdUIsVUFBVCxFQURtQyxDQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILENBakNEOztBQXVDQWIsR0FBRyxDQUFDYyxHQUFKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5xdWlyZXIgfSBmcm9tICcuL2ltcG9ydHMnO1xuaW1wb3J0IHsgZGljdGlvbmFyeSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgSUNtZExpc3RDb25maWcsIElDbWRDb21tYW5kQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IENtZCB9IGZyb20gJy4vY21kJztcblxuXG5jbGFzcyBBcHAge1xuICAgIHB1YmxpYyBydW4oKSB7XG5jbWQuaW50cm9kdWNlKCk7XG5cbmNtZC5saXN0KHtcbiAgICAgICAgYXNzb2NpYXRpdmU6ICdpbml0JyxcbiAgICAgICAgbWVzc2FnZTogZGljdGlvbmFyeS5tYWluUXVlc3Rpb24sXG4gICAgICAgIGNvbW1hbmRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY21kOiAnaW5zdGFsbCcsXG4gICAgICAgICAgICAgICAgZnVuYzogaW5zdGFsbEFjdGlvbnNGdW5jXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNtZDogJ2V4aXQnLFxuICAgICAgICAgICAgICAgIGZ1bmM6IGNtZC5ieWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgfVxufVxuXG5jb25zdCBjbWQgPSBuZXcgQ21kKCk7XG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5cblxuY29uc3QgcmVhY3RTdGFydGVyID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaW5xdWlyZXJcbiAgICAgICAgICAgICAgICAucHJvbXB0KFt7IHR5cGU6IFwiSW5wdXRcIiwgbmFtZTogJ3Byb2puYW1lJywgbWVzc2FnZTogJ1BsZWFzZSBzZW5kIG1lIGEgbmFtZSBvZiBwcm9qZWN0IScgfV0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKGFuc3dlcnM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbWQuZXhlYygnZ2l0JywgWydjbG9uZScsICdodHRwczovL2dpdGh1Yi5jb20vQW5kZXJzRGVhdGgvb3dsLXJlYWN0LXN0YXJ0ZXIuZ2l0JywgYW5zd2Vycy5wcm9qbmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xufVxuY29uc3QgYW5ndWxhclN0YXJ0ZXIgPSAoKSA9PiB7XG4gICAgICBpbnF1aXJlclxuICAgICAgICAgICAgICAgIC5wcm9tcHQoW3sgdHlwZTogXCJJbnB1dFwiLCBuYW1lOiAncHJvam5hbWUnLCBtZXNzYWdlOiAnUGxlYXNlIHNlbmQgbWUgYSBuYW1lIG9mIHByb2plY3QhJyB9XSlcbiAgICAgICAgICAgICAgICAudGhlbigoYW5zd2VyczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNtZC5leGVjKCdnaXQnLCBbJ2Nsb25lJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNEZWF0aC9vd2wtbmctc3RhcnRlci5naXQnLCBhbnN3ZXJzLnByb2puYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG59XG5jb25zdCB3ZWJwYWNrU3RhcnRlciA9ICgpID0+IHsgICBpbnF1aXJlclxuICAgICAgICAgICAgICAgIC5wcm9tcHQoW3sgdHlwZTogXCJJbnB1dFwiLCBuYW1lOiAncHJvam5hbWUnLCBtZXNzYWdlOiAnUGxlYXNlIHNlbmQgbWUgYSBuYW1lIG9mIHByb2plY3QhJyB9XSlcbiAgICAgICAgICAgICAgICAudGhlbigoYW5zd2VyczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNtZC5leGVjKCdnaXQnLCBbJ2Nsb25lJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNEZWF0aC93ZWJwYWNrNC1wdWctc2Fzcy1pbWFnZXMtZm9udHMtc2FydGVyLmdpdCcsIGFuc3dlcnMucHJvam5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTt9XG5jb25zdCBleGl0ID0gKCkgPT4geyAgICBjbWQuYnllKCk7fVxuXG5jb25zdCBnaXRDb25maWdzOiBJQ21kTGlzdENvbmZpZyA9IHtcbiAgICBhc3NvY2lhdGl2ZTogJ2luc3RhbGwnLFxuICAgIG1lc3NhZ2U6ICdXaGF0IGRvIHlvdSB3YW50IHRvIGluc3RhbGw/ICcsXG4gICAgY29tbWFuZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY21kOiAnUmVhY3Qtc3RhcnRlcicsXG4gICAgICAgICAgICBmdW5jOiByZWFjdFN0YXJ0ZXJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY21kOiAnQW5ndWxhci1zdGFydGVyJyxcbiAgICAgICAgICAgIGZ1bmM6IGFuZ3VsYXJTdGFydGVyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNtZDogJ1dlYnBhY2s0LXN0YXJ0ZXInLFxuICAgICAgICAgICAgZnVuYzogd2VicGFja1N0YXJ0ZXJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY21kOiAnZXhpdCcsXG4gICAgICAgICAgICBmdW5jOiBleGl0XG4gICAgICAgIH1cbiAgICBdXG59XG5cbmNvbnN0IGluc3RhbGxBY3Rpb25zRnVuYyA9ICgpOiB2b2lkID0+IHtcbiAgICBjbWQubGlzdChnaXRDb25maWdzKTtcbiAgICAvLyBpbnF1aXJlci5wcm9tcHQoW3tcbiAgICAvLyAgICAgdHlwZTogJ2xpc3QnLFxuICAgIC8vICAgICBuYW1lOiAnaW5zdGFsbCcsXG4gICAgLy8gICAgIG1lc3NhZ2U6ICdXaGF0IGRvIHlvdSB3YW50IHRvIGluc3RhbGw/ICcsXG4gICAgLy8gICAgIGNob2ljZXM6IFsnUmVhY3Qtc3RhcnRlcicsICdBbmd1bGFyLXN0YXJ0ZXInLCAnV2VicGFjazQtc3RhcnRlcicsICdleGl0J11cbiAgICAvLyB9XSkudGhlbigoZTogYW55KSA9PiB7XG4gICAgLy8gICAgIGlmIChlLmluc3RhbGwgPT09ICdSZWFjdC1zdGFydGVyJykge1xuICAgIC8vICAgICAgICAgaW5xdWlyZXJcbiAgICAvLyAgICAgICAgICAgICAucHJvbXB0KFt7IHR5cGU6IFwiSW5wdXRcIiwgbmFtZTogJ3Byb2puYW1lJywgbWVzc2FnZTogJ1BsZWFzZSBzZW5kIG1lIGEgbmFtZSBvZiBwcm9qZWN0IScgfV0pXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oKGFuc3dlcnM6IGFueSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBjbWQuZXhlYygnZ2l0JywgWydjbG9uZScsICdodHRwczovL2dpdGh1Yi5jb20vQW5kZXJzRGVhdGgvb3dsLXJlYWN0LXN0YXJ0ZXIuZ2l0JywgYW5zd2Vycy5wcm9qbmFtZV0pO1xuICAgIC8vICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChlLmluc3RhbGwgPT09ICdBbmd1bGFyLXN0YXJ0ZXInKSB7XG4gICAgLy8gICAgICAgICBpbnF1aXJlclxuICAgIC8vICAgICAgICAgICAgIC5wcm9tcHQoW3sgdHlwZTogXCJJbnB1dFwiLCBuYW1lOiAncHJvam5hbWUnLCBtZXNzYWdlOiAnUGxlYXNlIHNlbmQgbWUgYSBuYW1lIG9mIHByb2plY3QhJyB9XSlcbiAgICAvLyAgICAgICAgICAgICAudGhlbigoYW5zd2VyczogYW55KSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNtZC5leGVjKCdnaXQnLCBbJ2Nsb25lJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNEZWF0aC9vd2wtbmctc3RhcnRlci5naXQnLCBhbnN3ZXJzLnByb2puYW1lXSk7XG4gICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKGUuaW5zdGFsbCA9PT0gJ1dlYnBhY2s0LXN0YXJ0ZXInKSB7XG4gICAgLy8gICAgICAgICBpbnF1aXJlclxuICAgIC8vICAgICAgICAgICAgIC5wcm9tcHQoW3sgdHlwZTogXCJJbnB1dFwiLCBuYW1lOiAncHJvam5hbWUnLCBtZXNzYWdlOiAnUGxlYXNlIHNlbmQgbWUgYSBuYW1lIG9mIHByb2plY3QhJyB9XSlcbiAgICAvLyAgICAgICAgICAgICAudGhlbigoYW5zd2VyczogYW55KSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNtZC5leGVjKCdnaXQnLCBbJ2Nsb25lJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNEZWF0aC93ZWJwYWNrNC1wdWctc2Fzcy1pbWFnZXMtZm9udHMtc2FydGVyLmdpdCcsIGFuc3dlcnMucHJvam5hbWVdKTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoZS5pbnN0YWxsID09PSAnZXhpdCcpIHtcbiAgICAvLyAgICAgICAgIGNtZC5ieWUoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pO1xufVxuXG5cblxuXG5cbmFwcC5ydW4oKTsiXX0=