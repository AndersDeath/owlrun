import { Cmd } from '../src/cmd';

const cmd = new Cmd();

describe('Cmd class: introduce() method testing', function () {
    it('run() method defined', function () {
        expect(cmd.introduce).toBeDefined();
    });
});
describe('Cmd class: list() method testing', function () {
    it('is list() defined', function () {
        expect(cmd.list).toBeDefined();
    });
});
describe('Cmd class: inline() method testing', function () {
    it('is inline() defined', function () {
        expect(cmd.inline).toBeDefined();
    });
});
describe('Cmd class: bye() method testing', function () {
    it('is bye() defined', function () {
        expect(cmd.bye).toBeDefined();
    });
});
describe('Cmd class: exec() method testing', function () {
    it('is exec() defined', function () {
        expect(cmd.exec).toBeDefined();
    });
});
describe('Cmd class: gitClone() method testing', function () {
    it('is gitClone() defined', function () {
        expect(cmd.gitClone).toBeDefined();
    });
});
