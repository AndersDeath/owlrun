import { ICmdListConfig, ICmdInputConfig } from './interfaces';
/**
 * Class with methods for working with terminal
 */
export declare class Cmd {
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
