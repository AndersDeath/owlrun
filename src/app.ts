import { dictionary } from './utils';
import { ICmdListConfig } from './interfaces';
import { Cmd } from './cmd';
import { yargs } from './imports';

/**
 * Main class
 */
export class App {

    /**
     * Declare instance of cmd class
     */
    private cmd = new Cmd();

    /**
     * Config for starters installation
     */
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

    /**
     * Build and show install astarters actions list
     */
    public installAction() {
        this.cmd.list(this.installConfig);
    }

    /**
     * Initial method
     */
    public run() {
        this.cmd.introduce();
        if (yargs.argv.install === true) {
            console.log('QWEQWEWE')
        }
        yargs
            .command('install [projname]', 'clone the project', (yargs: any) => {

            }, (argv: any) => {
                this.installAction();
            })
            .command({command: '*', handler: () => {
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
            }})
            .argv

    }
}
