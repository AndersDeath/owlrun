import { App } from '../src/app';

const app = new App();

describe('App class: run() method testing', function () {
    it('run() method defined', function () {
        expect(app.run).toBeDefined();
    });
});
describe('App class: installAction() method testing', function () {
    it('is installAction() defined', function () {
        expect(app.installAction).toBeDefined();
    });
});
describe('App class: installConfig constans testing', function () {
    it('is installConfig constant defined', function () {
        expect(app['installConfig']).toBeDefined();
    });
});
describe('App class: is cmd class import defined', function () {
    it('is cmd class import defined', function () {
        expect(app['cmd']).toBeDefined();
    });
});



