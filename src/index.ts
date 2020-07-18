import { dictionary } from './utils';
import { ICmdListConfig } from './interfaces';
import { Cmd } from './cmd';
const cmd = new Cmd();

class App {

    private installConfig: ICmdListConfig = {
        associative: 'install',
        message: dictionary.whatDoYouWant,
        commands: [
            {
                cmd: 'React-starter',
                func: () => {
                    cmd.inline(
                        {
                            associative: 'projname',
                            message: dictionary.sendProjectName,
                            command: {
                                cmd: 'git-clone => https://github.com/AndersDeath/owl-react-starter.git %name%',
                            }
                        });
                }
            },
            {
                cmd: 'Angular-starter',
                func: () => {
                    cmd.inline({
                        associative: 'projname',
                        message: dictionary.sendProjectName,
                        command: {
                            cmd: 'git-clone => https://github.com/AndersDeath/owl-ng-starter.git %name%',
                        }
                    })
                }
            },
            {
                cmd: 'Webpack4-starter',
                func: () => {
                    cmd.inline({
                        associative: 'projname',
                        message: dictionary.sendProjectName,
                        command: {
                            cmd: 'git-clone => https://github.com/AndersDeath/webpack4-pug-sass-images-fonts-sarter.git %name%',
                        }
                    })
                }
            },
            {
                cmd: 'exit',
                func: cmd.bye
            }
        ]
    }

    public installAction() {
        cmd.list(this.installConfig);
    }

    public run() {
        cmd.introduce();

        cmd.list({
            associative: 'init',
            message: dictionary.mainQuestion,
            commands: [
                {
                    cmd: 'install',
                    func: this.installAction.bind(this)
                },
                {
                    cmd: 'exit',
                    func: cmd.bye
                }
            ]
        });

    }
}
const app = new App();




app.run();