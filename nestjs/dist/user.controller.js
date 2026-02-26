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
var UserController_1, AdminController_1, SuperAdminController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdminController = exports.AdminController = exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./dto/user.dto");
const user_entity_1 = require("./entities/user.entity");
let UserController = UserController_1 = class UserController {
    constructor(userService) {
        this.userService = userService;
        this.logger = new common_1.Logger(UserController_1.name);
    }
    createUser(createUserDto) {
        this.logger.log('=== Creating User Entity ===');
        this.logger.log(`Input data: ${JSON.stringify(createUserDto)}`);
        const user = new user_entity_1.UserEntity({
            ...createUserDto,
            id: crypto.randomUUID(),
        });
        this.logger.log(`Created user: ${user.constructor.name}`);
        this.logger.log(`User has AdminEntity subtype: ${'AdminEntity' in user}`);
        return this.userService.createUser(user);
    }
    getUser(id) {
        this.logger.log(`=== Getting User by ID: ${id} ===`);
        return this.userService.findUser(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user', description: 'Creates a user with mnemonica entity' }),
    (0, swagger_1.ApiBody)({ type: user_dto_1.CreateUserDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User created successfully', type: user_dto_1.UserResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", user_dto_1.UserResponseDto)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by ID', description: 'Retrieves a user by their unique identifier' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User UUID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User found', type: user_dto_1.UserResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", user_dto_1.UserResponseDto)
], UserController.prototype, "getUser", null);
exports.UserController = UserController = UserController_1 = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
let AdminController = AdminController_1 = class AdminController {
    constructor(userService) {
        this.userService = userService;
        this.logger = new common_1.Logger(AdminController_1.name);
    }
    createAdmin(createAdminDto) {
        this.logger.log('=== Creating Admin Entity via mnemonica inheritance ===');
        this.logger.log(`Input data: ${JSON.stringify(createAdminDto)}`);
        const user = new user_entity_1.UserEntity({
            id: crypto.randomUUID(),
            email: createAdminDto.email,
            name: createAdminDto.name,
        });
        this.logger.log(`Step 1: Created UserEntity: ${user.constructor.name}`);
        const admin = new user.AdminEntity({
            id: user.id,
            email: user.email,
            name: user.name,
            role: createAdminDto.role,
            permissions: createAdminDto.permissions || [],
        });
        this.logger.log(`Step 2: Created AdminEntity from user: ${admin.constructor.name}`);
        this.logger.log(`Admin has all inherited properties:`);
        this.logger.log(`  - id (from User): ${'id' in admin}`);
        this.logger.log(`  - email (from User): ${'email' in admin}`);
        this.logger.log(`  - name (from User): ${'name' in admin}`);
        this.logger.log(`  - role (from Admin): ${'role' in admin}`);
        this.logger.log(`  - permissions (from Admin): ${'permissions' in admin}`);
        return this.userService.createAdmin(admin);
    }
    getAdmin(id) {
        this.logger.log(`=== Getting Admin by ID: ${id} ===`);
        return this.userService.findAdmin(id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create a new admin',
        description: 'Creates an admin using mnemonica inheritance: first creates User, then Admin from User',
    }),
    (0, swagger_1.ApiBody)({ type: user_dto_1.CreateAdminDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Admin created successfully', type: user_dto_1.AdminResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateAdminDto]),
    __metadata("design:returntype", user_dto_1.AdminResponseDto)
], AdminController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get admin by ID', description: 'Retrieves an admin by their unique identifier' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Admin UUID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Admin found', type: user_dto_1.AdminResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Admin not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", user_dto_1.AdminResponseDto)
], AdminController.prototype, "getAdmin", null);
exports.AdminController = AdminController = AdminController_1 = __decorate([
    (0, swagger_1.ApiTags)('admins'),
    (0, common_1.Controller)('admins'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AdminController);
let SuperAdminController = SuperAdminController_1 = class SuperAdminController {
    constructor(userService) {
        this.userService = userService;
        this.logger = new common_1.Logger(SuperAdminController_1.name);
    }
    createSuperAdmin(createSuperAdminDto) {
        this.logger.log('=== Creating SuperAdmin Entity via mnemonica 3-level inheritance ===');
        this.logger.log(`Input data: ${JSON.stringify(createSuperAdminDto)}`);
        const user = new user_entity_1.UserEntity({
            id: crypto.randomUUID(),
            email: createSuperAdminDto.email,
            name: createSuperAdminDto.name,
        });
        this.logger.log(`Step 1: Created UserEntity: ${user.constructor.name}`);
        const admin = new user.AdminEntity({
            id: user.id,
            email: user.email,
            name: user.name,
            role: createSuperAdminDto.role,
            permissions: createSuperAdminDto.permissions || [],
        });
        this.logger.log(`Step 2: Created AdminEntity from user: ${admin.constructor.name}`);
        this.logger.log(`Admin has SuperAdminEntity subtype: ${'SuperAdminEntity' in admin}`);
        const superAdmin = new admin.SuperAdminEntity({
            id: admin.id,
            email: admin.email,
            name: admin.name,
            role: admin.role,
            permissions: admin.permissions,
            domain: createSuperAdminDto.domain,
        });
        this.logger.log(`Step 3: Created SuperAdminEntity from admin: ${superAdmin.constructor.name}`);
        this.logger.log(`SuperAdmin has all inherited properties:`);
        this.logger.log(`  - id (from User): ${'id' in superAdmin} = ${superAdmin.id}`);
        this.logger.log(`  - email (from User): ${'email' in superAdmin} = ${superAdmin.email}`);
        this.logger.log(`  - name (from User): ${'name' in superAdmin} = ${superAdmin.name}`);
        this.logger.log(`  - role (from Admin): ${'role' in superAdmin} = ${superAdmin.role}`);
        this.logger.log(`  - permissions (from Admin): ${'permissions' in superAdmin} = ${JSON.stringify(superAdmin.permissions)}`);
        this.logger.log(`  - domain (from SuperAdmin): ${'domain' in superAdmin} = ${superAdmin.domain}`);
        return this.userService.createSuperAdmin(superAdmin);
    }
    getSuperAdmin(id) {
        this.logger.log(`=== Getting SuperAdmin by ID: ${id} ===`);
        return this.userService.findSuperAdmin(id);
    }
};
exports.SuperAdminController = SuperAdminController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create a new super admin',
        description: 'Creates a superadmin using mnemonica 3-level inheritance: User -> Admin -> SuperAdmin',
    }),
    (0, swagger_1.ApiBody)({ type: user_dto_1.CreateSuperAdminDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'SuperAdmin created successfully', type: user_dto_1.SuperAdminResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateSuperAdminDto]),
    __metadata("design:returntype", user_dto_1.SuperAdminResponseDto)
], SuperAdminController.prototype, "createSuperAdmin", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get super admin by ID', description: 'Retrieves a superadmin by their unique identifier' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'SuperAdmin UUID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SuperAdmin found', type: user_dto_1.SuperAdminResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'SuperAdmin not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", user_dto_1.SuperAdminResponseDto)
], SuperAdminController.prototype, "getSuperAdmin", null);
exports.SuperAdminController = SuperAdminController = SuperAdminController_1 = __decorate([
    (0, swagger_1.ApiTags)('super-admins'),
    (0, common_1.Controller)('super-admins'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], SuperAdminController);
//# sourceMappingURL=user.controller.js.map