"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yargs = exports.execa = exports.inquirer = exports.figlet = exports.chalk = void 0;

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
/**
 * import yargs
 */


exports.execa = execa;

var yargs = require('yargs');

exports.yargs = yargs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbXBvcnRzLnRzIl0sIm5hbWVzIjpbImNoYWxrIiwicmVxdWlyZSIsImZpZ2xldCIsImlucXVpcmVyIiwiZXhlY2EiLCJ5YXJncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXJCLEMsQ0FDQTs7QUFDQTs7Ozs7OztBQUdBLElBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDLFFBQUQsQ0FBdEI7QUFDQTs7Ozs7OztBQUdBLElBQU1FLFFBQVEsR0FBR0YsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7QUFDQTs7Ozs7OztBQUdBLElBQU1HLEtBQUssR0FBR0gsT0FBTyxDQUFDLE9BQUQsQ0FBckI7QUFDQTs7Ozs7OztBQUdBLElBQU1JLEtBQUssR0FBR0osT0FBTyxDQUFDLE9BQUQsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogaW1wcG9ydCBjaGFsa1xyXG4gKi9cclxuY29uc3QgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpO1xyXG4vLyBjb25zdCBjbGVhciA9IHJlcXVpcmUoJ2NsZWFyJyk7XHJcbi8qKlxyXG4gKiBpbXBvcnQgZmlnbGV0XHJcbiAqL1xyXG5jb25zdCBmaWdsZXQgPSByZXF1aXJlKCdmaWdsZXQnKTtcclxuLyoqXHJcbiAqIGltcG9ydCBpbnF1aXJlclxyXG4gKi9cclxuY29uc3QgaW5xdWlyZXIgPSByZXF1aXJlKCdpbnF1aXJlcicpO1xyXG4vKipcclxuICogaW1wb3J0IGV4ZWNhXHJcbiAqL1xyXG5jb25zdCBleGVjYSA9IHJlcXVpcmUoJ2V4ZWNhJyk7XHJcbi8qKlxyXG4gKiBpbXBvcnQgeWFyZ3NcclxuICovXHJcbmNvbnN0IHlhcmdzID0gcmVxdWlyZSgneWFyZ3MnKTtcclxuXHJcbmV4cG9ydCB7IGNoYWxrLCBmaWdsZXQsIGlucXVpcmVyLCBleGVjYSwgeWFyZ3MgfTsiXX0=