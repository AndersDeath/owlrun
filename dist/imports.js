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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbXBvcnRzLnRzIl0sIm5hbWVzIjpbImNoYWxrIiwicmVxdWlyZSIsImZpZ2xldCIsImlucXVpcmVyIiwiZXhlY2EiLCJ5YXJncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXJCLEMsQ0FDQTs7QUFDQTs7Ozs7OztBQUdBLElBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDLFFBQUQsQ0FBdEI7QUFDQTs7Ozs7OztBQUdBLElBQU1FLFFBQVEsR0FBR0YsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7QUFDQTs7Ozs7OztBQUdBLElBQU1HLEtBQUssR0FBR0gsT0FBTyxDQUFDLE9BQUQsQ0FBckI7QUFDQTs7Ozs7OztBQUdBLElBQU1JLEtBQUssR0FBR0osT0FBTyxDQUFDLE9BQUQsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGltcHBvcnQgY2hhbGtcbiAqL1xuY29uc3QgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpO1xuLy8gY29uc3QgY2xlYXIgPSByZXF1aXJlKCdjbGVhcicpO1xuLyoqXG4gKiBpbXBvcnQgZmlnbGV0XG4gKi9cbmNvbnN0IGZpZ2xldCA9IHJlcXVpcmUoJ2ZpZ2xldCcpO1xuLyoqXG4gKiBpbXBvcnQgaW5xdWlyZXJcbiAqL1xuY29uc3QgaW5xdWlyZXIgPSByZXF1aXJlKCdpbnF1aXJlcicpO1xuLyoqXG4gKiBpbXBvcnQgZXhlY2FcbiAqL1xuY29uc3QgZXhlY2EgPSByZXF1aXJlKCdleGVjYScpO1xuLyoqXG4gKiBpbXBvcnQgeWFyZ3NcbiAqL1xuY29uc3QgeWFyZ3MgPSByZXF1aXJlKCd5YXJncycpO1xuXG5leHBvcnQgeyBjaGFsaywgZmlnbGV0LCBpbnF1aXJlciwgZXhlY2EsIHlhcmdzIH07Il19