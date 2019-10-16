declare class Logger {
    constructor();
    prefix: string;
    error(msg: string): void;
    warn(msg: string): void;
    info(msg: string): void;
}
declare const _default: Logger;
export default _default;
