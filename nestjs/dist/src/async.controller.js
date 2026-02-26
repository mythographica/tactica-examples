"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const async_dto_1 = require("./dto/async.dto");
const async_entity_1 = require("./entities/async.entity");
let AsyncController = class AsyncController {
    async createRootAsync(dto) {
        const rootAsync = await new async_entity_1.RootAsync({ value: dto.value });
        const result = {
            value: rootAsync.value,
            computed: rootAsync.computed,
        };
        return result;
    }
    async createResultFromDecorate(dto) {
        const rootAsync = await new async_entity_1.RootAsync({ value: dto.value });
        const resultDecorate = await rootAsync.ResultFromDecorate(dto.multiplier);
        const result = {
            value: resultDecorate.value,
            computed: resultDecorate.computed,
            result: resultDecorate.result,
            timestamp: resultDecorate.timestamp,
        };
        return result;
    }
    async getResultFromDecorate(value, multiplier) {
        const rootAsync = await new async_entity_1.RootAsync({ value: parseInt(value, 10) });
        const resultDecorate = await rootAsync.ResultFromDecorate(parseInt(multiplier, 10));
        const result = {
            value: resultDecorate.value,
            computed: resultDecorate.computed,
            result: resultDecorate.result,
            timestamp: resultDecorate.timestamp,
        };
        return result;
    }
    createSyncBase(dto) {
        const syncBase = new async_entity_1.SyncBase({ baseValue: dto.baseValue });
        const result = {
            baseValue: syncBase.baseValue,
        };
        return result;
    }
    async createSubAsync(dto) {
        const syncBase = new async_entity_1.SyncBase({ baseValue: dto.baseValue });
        const subAsync = await syncBase.SubAsync({
            delay: dto.delay,
            extra: dto.extra,
        });
        const result = {
            baseValue: subAsync.baseValue,
            delay: subAsync.delay,
            extra: subAsync.extra,
            processed: subAsync.processed,
        };
        return result;
    }
    async createSubDecorate(dto) {
        const syncBase = new async_entity_1.SyncBase({ baseValue: dto.baseValue });
        const subAsync = await syncBase.SubAsync({
            delay: dto.delay,
            extra: dto.extra,
        });
        const subDecorate = await subAsync.SubDecorate(dto.decorateValue);
        const result = {
            baseValue: subDecorate.baseValue,
            delay: subDecorate.delay,
            extra: subDecorate.extra,
            processed: subDecorate.processed,
            decorateValue: subDecorate.decorateValue,
            combined: subDecorate.combined,
        };
        return result;
    }
    async getSubDecorate(baseValue, delay, extra, decorateValue) {
        const syncBase = new async_entity_1.SyncBase({ baseValue });
        const subAsync = await syncBase.SubAsync({
            delay: parseInt(delay, 10),
            extra,
        });
        const subDecorate = await subAsync.SubDecorate(decorateValue);
        const result = {
            baseValue: subDecorate.baseValue,
            delay: subDecorate.delay,
            extra: subDecorate.extra,
            processed: subDecorate.processed,
            decorateValue: subDecorate.decorateValue,
            combined: subDecorate.combined,
        };
        return result;
    }
};
exports.AsyncController = AsyncController;
__decorate([
    (0, common_1.Post)('root-async'),
    (0, swagger_1.ApiOperation)({
        summary: 'Create RootAsync instance',
        description: 'Demonstrates await new RootAsync() - async constructor with 100ms sleep',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'RootAsync instance created',
        type: async_dto_1.RootAsyncResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [async_dto_1.CreateRootAsyncDto]),
    __metadata("design:returntype", Promise)
], AsyncController.prototype, "createRootAsync", null);
__decorate([
    (0, common_1.Post)('root-async/result-decorate'),
    (0, swagger_1.ApiOperation)({
        summary: 'Create RootAsync then ResultFromDecorate',
        description: 'Demonstrates await new RootAsync() then .ResultFromDecorate() chaining',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'ResultFromDecorate instance created',
        type: async_dto_1.ResultFromDecorateResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [async_dto_1.CreateRootAsyncDto]),
    __metadata("design:returntype", Promise)
], AsyncController.prototype, "createResultFromDecorate", null);
__decorate([
    (0, common_1.Get)('root-async/:value/result-decorate/:multiplier'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get ResultFromDecorate via URL params',
        description: 'Alternative GET endpoint for Pattern 1',
    }),
    (0, swagger_1.ApiParam)({ name: 'value', type: Number, description: 'Initial value' }),
    (0, swagger_1.ApiParam)({ name: 'multiplier', type: Number, description: 'Multiplier for result' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Combined result',
        type: async_dto_1.ResultFromDecorateResponseDto,
    }),
    __param(0, (0, common_1.Param)('value')),
    __param(1, (0, common_1.Param)('multiplier')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AsyncController.prototype, "getResultFromDecorate", null);
__decorate([
    (0, common_1.Post)('sync-base'),
    (0, swagger_1.ApiOperation)({
        summary: 'Create SyncBase instance',
        description: 'Creates a SyncBase using define with a class constructor',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'SyncBase instance created',
        type: async_dto_1.SyncBaseResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [async_dto_1.CreateSyncBaseDto]),
    __metadata("design:returntype", async_dto_1.SyncBaseResponseDto)
], AsyncController.prototype, "createSyncBase", null);
__decorate([
    (0, common_1.Post)('sync-base/sub-async'),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Sync then SubAsync',
        description: 'Demonstrates await new Sync().SubAsync() chaining',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'SubAsync instance created',
        type: async_dto_1.SubAsyncResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [async_dto_1.CreateSubAsyncDto]),
    __metadata("design:returntype", Promise)
], AsyncController.prototype, "createSubAsync", null);
__decorate([
    (0, common_1.Post)('sync-base/sub-async/sub-decorate'),
    (0, swagger_1.ApiOperation)({
        summary: 'Create full chain: Sync -> SubAsync -> SubDecorate',
        description: 'Demonstrates await new Sync().SubAsync() then access .SubDecorate()',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'SubDecorate instance created',
        type: async_dto_1.SubDecorateResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [async_dto_1.CreateSubAsyncDto]),
    __metadata("design:returntype", Promise)
], AsyncController.prototype, "createSubDecorate", null);
__decorate([
    (0, common_1.Get)('sync-base/:baseValue/sub-async/:delay/:extra/sub-decorate/:decorateValue'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get full chain via URL params',
        description: 'Alternative GET endpoint for Pattern 2',
    }),
    (0, swagger_1.ApiParam)({ name: 'baseValue', type: String, description: 'Base value' }),
    (0, swagger_1.ApiParam)({ name: 'delay', type: Number, description: 'Delay in ms' }),
    (0, swagger_1.ApiParam)({ name: 'extra', type: String, description: 'Extra string' }),
    (0, swagger_1.ApiParam)({ name: 'decorateValue', type: String, description: 'Decoration value' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Combined result',
        type: async_dto_1.SubDecorateResponseDto,
    }),
    __param(0, (0, common_1.Param)('baseValue')),
    __param(1, (0, common_1.Param)('delay')),
    __param(2, (0, common_1.Param)('extra')),
    __param(3, (0, common_1.Param)('decorateValue')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], AsyncController.prototype, "getSubDecorate", null);
exports.AsyncController = AsyncController = __decorate([
    (0, swagger_1.ApiTags)('async-examples'),
    (0, common_1.Controller)('async')
], AsyncController);
//# sourceMappingURL=async.controller.js.map