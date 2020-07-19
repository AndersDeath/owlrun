declare module "utils" {
    /**
     * strings distionary
     */
    export const dictionary: {
        title: string;
        subTitle: string;
        mainQuestion: string;
        bye: string;
        sendProjectName: string;
        whatDoYouWant: string;
    };
    /**
     * simple string separator
     */
    export const separator = "--------------";
    /**
     * Command patterns description
     */
    export const COMMANDS: {
        GIT_CLONE: string;
    };
}
declare module "interfaces" {
    /**
     * Void function type
     */
    type voidFunc = () => void;
    /**
     * Answer function type
     */
    type answerFunc = (answer?: any) => void;
    /**
     * Common list and input config interface
     */
    interface ICmdConfig {
        /**
         * String of association with command of inquirer
         */
        associative: string;
        /**
         * Message of inquirer commands
         */
        message: string;
    }
    /**
     * Command config interface
     */
    export interface ICmdCommandConfig {
        /**
         * cmd command
         */
        cmd: string;
        /**
         * cmd command callback
         */
        func?: voidFunc | answerFunc;
    }
    /**
     * Cmd list config interface
     */
    export interface ICmdListConfig extends ICmdConfig {
        /**
         * list of cmd commands
         */
        commands: ICmdCommandConfig[];
    }
    /**
     * Cmd input config interface
     */
    export interface ICmdInputConfig extends ICmdConfig {
        /**
         * cmd command
         */
        command: ICmdCommandConfig;
    }
}
declare module "imports" {
    /**
     * impport chalk
     */
    const chalk: any;
    /**
     * import figlet
     */
    const figlet: any;
    /**
     * import inquirer
     */
    const inquirer: any;
    /**
     * import execa
     */
    const execa: any;
    export { chalk, figlet, inquirer, execa };
}
declare module "cmd" {
    import { ICmdListConfig, ICmdInputConfig } from "interfaces";
    /**
     * Class with methods for working with terminal
     */
    export class Cmd {
        /**
         * Display introduction
         */
        introduce(): void;
        /**
         * Create and displace inquirer promt list
         * @param config config for CmdList
         */
        list(config: ICmdListConfig): void;
        /**
         * Create and displace inquirer promt input
         * @param config config for CmdInput
         */
        inline(config: ICmdInputConfig): void;
        /**
         * Display bye
         */
        bye(): void;
        /**
         * A terminal commad execution
         * @param command exec command
         * @param argumenti exec arguments
         */
        exec(command: string, argumenti?: string[]): void;
        /**
         * Git clone execution
         * @param command git clone params
         */
        gitClone(command?: string[]): void;
    }
}
declare module "app" {
    /**
     * Main class
     */
    export class App {
        /**
         * Declare instance of cmd class
         */
        private cmd;
        /**
         * Config for starters installation
         */
        private installConfig;
        /**
         * Build and show install astarters actions list
         */
        installAction(): void;
        /**
         * Initial method
         */
        run(): void;
    }
}
declare module "index" { }
