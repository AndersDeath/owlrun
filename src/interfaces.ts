export interface ICmdCommandConfig {
    cmd: string;
    func: ()=>void
}

export interface ICmdListConfig {
    associative: string;
    commands: ICmdCommandConfig[],
    message: string
}