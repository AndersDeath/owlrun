/**
 * Void function type
 */
declare type voidFunc = () => void;
/**
 * Answer function type
 */
declare type answerFunc = (answer?: any) => void;
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
export {};
