declare class Cache {
    private BUFFER;
    getItem(key: string): any;
    setItem(key: string, val: any): void;
    exist(key: string): boolean;
}
export declare const HoverColor: Cache;
export {};
