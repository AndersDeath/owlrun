import { inquirer } from './imports';
import { dictionary } from './utils';
import { ICmdListConfig, ICmdCommandConfig } from './interfaces';
import { Cmd } from './cmd';


class App {
    public run() {
        cmd.introduce();

        cmd.list({
            associative: 'init',
            message: dictionary.mainQuestion,
            commands: [
                {
                    cmd: 'install',
                    func: installActionsFunc
                },
                {
                    cmd: 'exit',
                    func: cmd.bye
                }
            ]
        });

    }
}

const cmd = new Cmd();
const app = new App();


const reactStarter = () => {
    inquirer
        .prompt([{ type: "Input", name: 'projname', message: 'Please send me a name of project!' }])
        .then((answers: any) => {
            cmd.exec('git', ['clone', 'https://github.com/AndersDeath/owl-react-starter.git', answers.projname]);
        });
}
const angularStarter = () => {
    inquirer
        .prompt([{ type: "Input", name: 'projname', message: 'Please send me a name of project!' }])
        .then((answers: any) => {
            cmd.exec('git', ['clone', 'https://github.com/AndersDeath/owl-ng-starter.git', answers.projname]);
        });
}
const webpackStarter = () => {
    inquirer
        .prompt([{ type: "Input", name: 'projname', message: 'Please send me a name of project!' }])
    .then((answers: any) => {
        cmd.exec('git', ['clone', 'https://github.com/AndersDeath/webpack4-pug-sass-images-fonts-sarter.git', answers.projname]);
    });
}
const exit = () => { cmd.bye(); }

const gitConfigs: ICmdListConfig = {
    associative: 'install',
    message: 'What do you want to install? ',
    commands: [
        {
            cmd: 'React-starter',
            func: reactStarter
        },
        {
            cmd: 'Angular-starter',
            func: angularStarter
        },
        {
            cmd: 'Webpack4-starter',
            func: webpackStarter
        },
        {
            cmd: 'exit',
            func: exit
        }
    ]
}

const installActionsFunc = (): void => {
    cmd.list(gitConfigs);
}





app.run();