"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() {
        this.users = new Map();
        this.admins = new Map();
        this.superAdmins = new Map();
    }
    createUser(user) {
        this.users.set(user.id, user);
        const userResponse = new user.UserResponse({
            id: user.id,
            email: user.email,
            name: user.name,
            type: 'user',
        });
        return userResponse;
    }
    createAdmin(admin) {
        this.admins.set(admin.id, admin);
        const adminResponse = new admin.AdminResponse({
            id: admin.id,
            email: admin.email,
            name: admin.name,
            type: 'admin',
            role: admin.role,
            permissions: admin.permissions,
        });
        return adminResponse;
    }
    createSuperAdmin(superAdmin) {
        this.superAdmins.set(superAdmin.id, superAdmin);
        const superAdminResponse = new superAdmin.SuperAdminResponse({
            id: superAdmin.id,
            email: superAdmin.email,
            name: superAdmin.name,
            type: 'superadmin',
            role: superAdmin.role,
            permissions: superAdmin.permissions,
            domain: superAdmin.domain,
        });
        return superAdminResponse;
    }
    findUser(id) {
        const user = this.users.get(id);
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        const userResponse = new user.UserResponse({
            id: user.id,
            email: user.email,
            name: user.name,
            type: 'user',
        });
        return userResponse;
    }
    findAdmin(id) {
        const admin = this.admins.get(id);
        if (!admin) {
            throw new common_1.NotFoundException(`Admin with id ${id} not found`);
        }
        const adminResponse = new admin.AdminResponse({
            id: admin.id,
            email: admin.email,
            name: admin.name,
            type: 'admin',
            role: admin.role,
            permissions: admin.permissions,
        });
        return adminResponse;
    }
    findSuperAdmin(id) {
        const superAdmin = this.superAdmins.get(id);
        if (!superAdmin) {
            throw new common_1.NotFoundException(`SuperAdmin with id ${id} not found`);
        }
        const superAdminResponse = new superAdmin.SuperAdminResponse({
            id: superAdmin.id,
            email: superAdmin.email,
            name: superAdmin.name,
            type: 'superadmin',
            role: superAdmin.role,
            permissions: superAdmin.permissions,
            domain: superAdmin.domain,
        });
        return superAdminResponse;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map