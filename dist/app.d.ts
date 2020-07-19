declare module "utils" {
    export const dictionary: {
        title: string;
        subTitle: string;
        mainQuestion: string;
        bye: string;
        sendProjectName: string;
        whatDoYouWant: string;
    };
    export const separator = "--------------";
    export const COMMANDS: {
        GIT_CLONE: string;
    };
}
declare module "interfaces" {
    type voidFunc = () => void;
    type answerFunc = (answer?: any) => void;
    interface ICmdConfig {
        associative: string;
        message: string;
    }
    export interface ICmdCommandConfig {
        cmd: string;
        func?: voidFunc | answerFunc;
    }
    export interface ICmdListConfig extends ICmdConfig {
        commands: ICmdCommandConfig[];
    }
    export interface ICmdInputConfig extends ICmdConfig {
        command: ICmdCommandConfig;
    }
}
declare module "imports" {
    const chalk: any;
    const figlet: any;
    const inquirer: any;
    const execa: any;
    export { chalk, figlet, inquirer, execa };
}
declare module "cmd" {
    import { ICmdListConfig, ICmdInputConfig } from "interfaces";
    export class Cmd {
        introduce(): void;
        list(config: ICmdListConfig): void;
        inline(config: ICmdInputConfig): void;
        bye(): void;
        exec(command: string, argumenti?: string[]): void;
        gitClone(command?: string[]): void;
    }
}
declare module "app" {
    export class App {
        private cmd;
        private installConfig;
        installAction(): void;
        run(): void;
    }
}
declare module "index" { }