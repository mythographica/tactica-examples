"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdminResponse = exports.SuperAdminEntity = exports.AdminResponse = exports.AdminEntity = exports.UserResponse = exports.UserEntity = void 0;
const mnemonica_1 = require("mnemonica");
exports.UserEntity = (0, mnemonica_1.define)('UserEntity', function (data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
});
exports.UserResponse = exports.UserEntity.define('UserResponse', function (data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.type = data.type;
});
exports.AdminEntity = exports.UserEntity.define('AdminEntity', function (data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.role = data.role;
    this.permissions = data.permissions || [];
});
exports.AdminResponse = exports.AdminEntity.define('AdminResponse', function (data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.type = data.type;
    this.role = data.role;
    this.permissions = data.permissions;
});
exports.SuperAdminEntity = exports.AdminEntity.define('SuperAdminEntity', function (data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.role = data.role;
    this.permissions = data.permissions || [];
    this.domain = data.domain;
});
exports.SuperAdminResponse = exports.SuperAdminEntity.define('SuperAdminResponse', function (data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.type = data.type;
    this.role = data.role;
    this.permissions = data.permissions;
    this.domain = data.domain;
});
//# sourceMappingURL=user.entity.js.map