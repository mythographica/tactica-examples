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
exports.SuperAdminResponseDto = exports.AdminResponseDto = exports.UserResponseDto = exports.CreateSuperAdminDto = exports.CreateAdminDto = exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User email address',
        example: 'user@example.com',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User name',
        example: 'John Doe',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
class CreateAdminDto extends CreateUserDto {
}
exports.CreateAdminDto = CreateAdminDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Admin role',
        example: 'admin',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'List of permissions',
        example: ['read', 'write', 'delete'],
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateAdminDto.prototype, "permissions", void 0);
class CreateSuperAdminDto extends CreateAdminDto {
}
exports.CreateSuperAdminDto = CreateSuperAdminDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Domain this superadmin manages',
        example: 'global',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSuperAdminDto.prototype, "domain", void 0);
class UserResponseDto {
}
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique identifier',
        example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User email address',
        example: 'user@example.com',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User name',
        example: 'John Doe',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Entity type',
        example: 'user',
        enum: ['user', 'admin', 'superadmin'],
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "type", void 0);
class AdminResponseDto extends UserResponseDto {
}
exports.AdminResponseDto = AdminResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Admin role',
        example: 'admin',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdminResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of permissions',
        example: ['read', 'write', 'delete'],
        type: [String],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AdminResponseDto.prototype, "permissions", void 0);
class SuperAdminResponseDto extends AdminResponseDto {
}
exports.SuperAdminResponseDto = SuperAdminResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Domain this superadmin manages',
        example: 'global',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SuperAdminResponseDto.prototype, "domain", void 0);
//# sourceMappingURL=user.dto.js.map