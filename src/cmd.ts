import { chalk, figlet, inquirer, execa } from './imports';
import { dictionary, separator, COMMANDS } from './utils';
import { ICmdListConfig, ICmdCommandConfig, ICmdInputConfig } from './interfaces';

/**
 * Class with methods for working with terminal
 */
export class Cmd {
    /**
     * Display introduction
     */
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

    /**
     * Create and displace inquirer promt list
     * @param config config for CmdList
     */
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

    /**
     * Create and displace inquirer promt input
     * @param config config for CmdInput
     */
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

    /**
     * Display bye
     */
    public bye(): void {
        console.log(
            chalk.red(
                dictionary.bye
            )
        );
    }

    /**
     * A terminal commad execution
     * @param command exec command
     * @param argumenti exec arguments
     */
    public exec(command: string, argumenti: string[] = []): void {
        execa(command, argumenti, { stdio: 'inherit' })
    }

    /**
     * Git clone execution
     * @param command git clone params
     */
    public gitClone(command: string[] = []) {
        execa('git', ['clone', ...command], { stdio: 'inherit' })
    }
}