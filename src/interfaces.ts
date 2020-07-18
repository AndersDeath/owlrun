type voidFunc = () => void;
type answerFunc =  (answer?: any) => void;

interface ICmdConfig {
    associative: string;
    message: string;
}

export interface ICmdCommandConfig {
    cmd: string;
    func?: voidFunc | answerFunc
}

export interface ICmdListConfig extends ICmdConfig {
    commands: ICmdCommandConfig[];
}

export interface ICmdInputConfig extends ICmdConfig {
    command: ICmdCommandConfig;
}