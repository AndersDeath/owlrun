declare module "imports" {
    const chalk: any;
    const figlet: any;
    const inquirer: any;
    const execa: any;
    export { chalk, figlet, inquirer, execa };
}
declare module "utils" {
    export const dictionary: {
        title: string;
        subTitle: string;
        mainQuestion: string;
        bye: string;
    };
    export const separator = "--------------";
}
declare module "interfaces" {
    export interface ICmdCommandConfig {
        cmd: string;
        func: () => void;
    }
    export interface ICmdListConfig {
        associative: string;
        commands: ICmdCommandConfig[];
        message: string;
    }
}
declare module "cmd" {
    import { ICmdListConfig } from "interfaces";
    export class Cmd {
        introduce(): void;
        list(config: ICmdListConfig): void;
        bye(): void;
        exec(command: string, argumenti?: string[]): void;
    }
}
declare module "index" { }
