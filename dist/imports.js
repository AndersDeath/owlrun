"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execa = exports.inquirer = exports.figlet = exports.chalk = void 0;

/**
 * impport chalk
 */
var chalk = require('chalk'); // const clear = require('clear');

/**
 * import figlet
 */


exports.chalk = chalk;

var figlet = require('figlet');
/**
 * import inquirer
 */


exports.figlet = figlet;

var inquirer = require('inquirer');
/**
 * import execa
 */


exports.inquirer = inquirer;

var execa = require('execa');

exports.execa = execa;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbXBvcnRzLnRzIl0sIm5hbWVzIjpbImNoYWxrIiwicmVxdWlyZSIsImZpZ2xldCIsImlucXVpcmVyIiwiZXhlY2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBR0EsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUFyQixDLENBQ0E7O0FBQ0E7Ozs7Ozs7QUFHQSxJQUFNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQyxRQUFELENBQXRCO0FBQ0E7Ozs7Ozs7QUFHQSxJQUFNRSxRQUFRLEdBQUdGLE9BQU8sQ0FBQyxVQUFELENBQXhCO0FBQ0E7Ozs7Ozs7QUFHQSxJQUFNRyxLQUFLLEdBQUdILE9BQU8sQ0FBQyxPQUFELENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBpbXBwb3J0IGNoYWxrXG4gKi9cbmNvbnN0IGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKTtcbi8vIGNvbnN0IGNsZWFyID0gcmVxdWlyZSgnY2xlYXInKTtcbi8qKlxuICogaW1wb3J0IGZpZ2xldFxuICovXG5jb25zdCBmaWdsZXQgPSByZXF1aXJlKCdmaWdsZXQnKTtcbi8qKlxuICogaW1wb3J0IGlucXVpcmVyXG4gKi9cbmNvbnN0IGlucXVpcmVyID0gcmVxdWlyZSgnaW5xdWlyZXInKTtcbi8qKlxuICogaW1wb3J0IGV4ZWNhXG4gKi9cbmNvbnN0IGV4ZWNhID0gcmVxdWlyZSgnZXhlY2EnKTtcblxuZXhwb3J0IHsgY2hhbGssIGZpZ2xldCwgaW5xdWlyZXIsIGV4ZWNhIH07Il19