import { CreateRootAsyncDto, ResultFromDecorateResponseDto, CreateSyncBaseDto, CreateSubAsyncDto, SubAsyncResponseDto, SubDecorateResponseDto, SyncBaseResponseDto, RootAsyncResponseDto } from './dto/async.dto';
export declare class AsyncController {
    createRootAsync(dto: CreateRootAsyncDto): Promise<RootAsyncResponseDto>;
    createResultFromDecorate(dto: CreateRootAsyncDto): Promise<ResultFromDecorateResponseDto>;
    getResultFromDecorate(value: string, multiplier: string): Promise<ResultFromDecorateResponseDto>;
    createSyncBase(dto: CreateSyncBaseDto): SyncBaseResponseDto;
    createSubAsync(dto: CreateSubAsyncDto): Promise<SubAsyncResponseDto>;
    createSubDecorate(dto: CreateSubAsyncDto): Promise<SubDecorateResponseDto>;
    getSubDecorate(baseValue: string, delay: string, extra: string, decorateValue: string): Promise<SubDecorateResponseDto>;
}
