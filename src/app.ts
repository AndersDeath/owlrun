import { dictionary } from './utils';
import { ICmdListConfig } from './interfaces';
import { Cmd } from './cmd';

export class App {
    private cmd = new Cmd();
    private installConfig: ICmdListConfig = {
        associative: 'install',
        message: dictionary.whatDoYouWant,
        commands: [
            {
                cmd: 'React-starter',
                func: () => {
                    this.cmd.inline(
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
                    this.cmd.inline({
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
                    this.cmd.inline({
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
                func: this.cmd.bye
            }
        ]
    }

    public installAction() {
        this.cmd.list(this.installConfig);
    }

    public run() {
        this.cmd.introduce();

        this.cmd.list({
            associative: 'init',
            message: dictionary.mainQuestion,
            commands: [
                {
                    cmd: 'install',
                    func: this.installAction.bind(this)
                },
                {
                    cmd: 'exit',
                    func: this.cmd.bye
                }
            ]
        });

    }
}
