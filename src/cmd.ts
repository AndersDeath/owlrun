import { chalk, figlet, inquirer, execa } from './imports';
import { dictionary, separator, COMMANDS } from './utils';
import { ICmdListConfig, ICmdCommandConfig, ICmdInputConfig } from './interfaces';

export class Cmd {
    public introduce(): void {
        console.log(`
${chalk.yellow(
            figlet.textSync(dictionary.title, {})
        )}`, `
${chalk.yellow(
            separator
        )}`, `
${chalk.red(
            dictionary.title
        )}
${chalk.red(
            dictionary.subTitle
        )}`, `
${chalk.yellow(
            separator
        )}
`);
    }

    public list(config: ICmdListConfig): void {
        inquirer.prompt([{
            type: 'list',
            name: config.associative,
            message: config.message,
            choices: config.commands.map((value: ICmdCommandConfig) => {
                return value.cmd;
            })
        }]).then((e: any) => {
            for (let command of config.commands) {
                if (e[config.associative] === command.cmd) {
                    command.func !== undefined ? command.func() : '';
                    break;
                }
            }
        });
    }

    public inline(config: ICmdInputConfig) {
        inquirer
            .prompt([{ type: "Input", name: config.associative, message: config.message }])
            .then((answers: any) => {
                if (~config.command.cmd.indexOf(COMMANDS.GIT_CLONE)) {
                    this.gitClone(
                        config
                            .command
                            .cmd
                            .replace(COMMANDS.GIT_CLONE, '')
                            .trim()
                            .replace('%name%', answers[config.associative])
                            .trim()
                            .split(' ')
                    );
                }
            });
    }

    public bye(): void {
        console.log(
            chalk.red(
                dictionary.bye
            )
        );
    }

    public exec(command: string, argumenti: string[] = []): void {
        execa(command, argumenti, { stdio: 'inherit' })
    }

    public gitClone(command: string[] = []) {
        execa('git', ['clone', ...command], { stdio: 'inherit' })
    }
}