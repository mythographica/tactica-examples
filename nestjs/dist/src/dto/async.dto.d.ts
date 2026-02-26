export declare class CreateRootAsyncDto {
    value: number;
    multiplier: number;
}
export declare class RootAsyncResponseDto {
    value: number;
    computed: number;
}
export declare class ResultFromDecorateResponseDto extends RootAsyncResponseDto {
    result: number;
    timestamp: number;
}
export declare class CreateSyncBaseDto {
    baseValue: string;
}
export declare class CreateSubAsyncDto {
    baseValue: string;
    delay: number;
    extra: string;
    decorateValue: string;
}
export declare class SyncBaseResponseDto {
    baseValue: string;
}
export declare class SubAsyncResponseDto extends SyncBaseResponseDto {
    delay: number;
    extra: string;
    processed: string;
}
export declare class SubDecorateResponseDto extends SubAsyncResponseDto {
    decorateValue: string;
    combined: string;
}
