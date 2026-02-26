export declare const RootAsync: import("mnemonica/build/types").IDefinitorInstance<RootAsyncInstance, import("mnemonica/build/types").SN, import("mnemonica/build/types").constructorOptions>;
export declare const ResultFromDecorate: import("mnemonica/build/types").IDefinitorInstance<ResultFromDecorateInstance, import("mnemonica/build/types").SN, import("mnemonica/build/types").constructorOptions>;
export declare class SyncBaseClass {
    baseValue: string;
    constructor(data: {
        baseValue: string;
    });
}
export declare const SyncBase: import("mnemonica/build/types").IDefinitorInstance<SyncBaseClass, import("mnemonica/build/types").SN, import("mnemonica/build/types").constructorOptions>;
type SubAsyncInstanceWithBase = SubAsyncInstance & SyncBaseInstance;
type SubDecorateInstanceWithBase = SubDecorateInstance & SyncBaseInstance;
export declare const SubAsync: import("mnemonica/build/types").IDefinitorInstance<any, import("mnemonica/build/types").SN, import("mnemonica/build/types").constructorOptions>;
export declare const SubDecorate: import("mnemonica/build/types").IDefinitorInstance<any, import("mnemonica/build/types").SN, import("mnemonica/build/types").constructorOptions>;
export type { SubAsyncInstanceWithBase, SubDecorateInstanceWithBase };
