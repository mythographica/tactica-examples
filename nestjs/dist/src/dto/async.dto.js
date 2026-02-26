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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubDecorateResponseDto = exports.SubAsyncResponseDto = exports.SyncBaseResponseDto = exports.CreateSubAsyncDto = exports.CreateSyncBaseDto = exports.ResultFromDecorateResponseDto = exports.RootAsyncResponseDto = exports.CreateRootAsyncDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateRootAsyncDto {
    constructor() {
        this.value = 0;
        this.multiplier = 1;
    }
}
exports.CreateRootAsyncDto = CreateRootAsyncDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Input value to process',
        example: 42,
    }),
    __metadata("design:type", Number)
], CreateRootAsyncDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Multiplier for ResultFromDecorate',
        example: 3,
    }),
    __metadata("design:type", Number)
], CreateRootAsyncDto.prototype, "multiplier", void 0);
class RootAsyncResponseDto {
    constructor() {
        this.value = 0;
        this.computed = 0;
    }
}
exports.RootAsyncResponseDto = RootAsyncResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Original value',
        example: 42,
    }),
    __metadata("design:type", Number)
], RootAsyncResponseDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Computed value (value * 2)',
        example: 84,
    }),
    __metadata("design:type", Number)
], RootAsyncResponseDto.prototype, "computed", void 0);
class ResultFromDecorateResponseDto extends RootAsyncResponseDto {
    constructor() {
        super(...arguments);
        this.result = 0;
        this.timestamp = 0;
    }
}
exports.ResultFromDecorateResponseDto = ResultFromDecorateResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Final result (computed * multiplier)',
        example: 252,
    }),
    __metadata("design:type", Number)
], ResultFromDecorateResponseDto.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Timestamp when result was created',
        example: 1700000000000,
    }),
    __metadata("design:type", Number)
], ResultFromDecorateResponseDto.prototype, "timestamp", void 0);
class CreateSyncBaseDto {
    constructor() {
        this.baseValue = '';
    }
}
exports.CreateSyncBaseDto = CreateSyncBaseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Base value for the sync type',
        example: 'hello',
    }),
    __metadata("design:type", String)
], CreateSyncBaseDto.prototype, "baseValue", void 0);
class CreateSubAsyncDto {
    constructor() {
        this.baseValue = '';
        this.delay = 100;
        this.extra = '';
        this.decorateValue = '';
    }
}
exports.CreateSubAsyncDto = CreateSubAsyncDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Base value for the sync type',
        example: 'hello',
    }),
    __metadata("design:type", String)
], CreateSubAsyncDto.prototype, "baseValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Delay in milliseconds (simulates async operation)',
        example: 100,
    }),
    __metadata("design:type", Number)
], CreateSubAsyncDto.prototype, "delay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Extra string to append',
        example: 'world',
    }),
    __metadata("design:type", String)
], CreateSubAsyncDto.prototype, "extra", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Decoration value for SubDecorate',
        example: 'decorated',
    }),
    __metadata("design:type", String)
], CreateSubAsyncDto.prototype, "decorateValue", void 0);
class SyncBaseResponseDto {
    constructor() {
        this.baseValue = '';
    }
}
exports.SyncBaseResponseDto = SyncBaseResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Base value',
        example: 'hello',
    }),
    __metadata("design:type", String)
], SyncBaseResponseDto.prototype, "baseValue", void 0);
class SubAsyncResponseDto extends SyncBaseResponseDto {
    constructor() {
        super(...arguments);
        this.delay = 0;
        this.extra = '';
        this.processed = '';
    }
}
exports.SubAsyncResponseDto = SubAsyncResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Delay used',
        example: 100,
    }),
    __metadata("design:type", Number)
], SubAsyncResponseDto.prototype, "delay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Extra string appended',
        example: 'world',
    }),
    __metadata("design:type", String)
], SubAsyncResponseDto.prototype, "extra", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Processed value (baseValue-extra)',
        example: 'hello-world',
    }),
    __metadata("design:type", String)
], SubAsyncResponseDto.prototype, "processed", void 0);
class SubDecorateResponseDto extends SubAsyncResponseDto {
    constructor() {
        super(...arguments);
        this.decorateValue = '';
        this.combined = '';
    }
}
exports.SubDecorateResponseDto = SubDecorateResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Decoration value',
        example: 'decorated',
    }),
    __metadata("design:type", String)
], SubDecorateResponseDto.prototype, "decorateValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Combined result (processed:decorateValue)',
        example: 'hello-world:decorated',
    }),
    __metadata("design:type", String)
], SubDecorateResponseDto.prototype, "combined", void 0);
//# sourceMappingURL=async.dto.js.map