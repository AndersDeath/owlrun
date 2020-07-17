import { inquirer } from './imports';
import { dictionary } from './utils';
import { ICmdListConfig, ICmdCommandConfig, ICmdInputConfig } from './interfaces';
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

const inline = (config:ICmdInputConfig) => {
    inquirer
        .prompt([{ type: "Input", name: config.associative, message: config.message }])
        .then((answers: any) => {
            config.command.func(answers[config.associative]);
        });
}


const reactStarter = () => {
    inline(
        {
        associative: 'projname',
        message: dictionary.sendProjectName,
        command: {
            cmd: 'git-clone => https://github.com/AndersDeath/owl-react-starter.git %name%',
            func: function(answer: any): void {
                if(~this.cmd.indexOf('git-clone => ')) {
                    cmd.gitClone(this.cmd.replace('git-clone => ', '').trim().replace('%name%', answer).split(' '));
                }
        }}
    })
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