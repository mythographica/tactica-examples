"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdminEntity = exports.AdminEntity = exports.UserEntity = void 0;
require("reflect-metadata");
const mnemonica_1 = require("mnemonica");
exports.UserEntity = (0, mnemonica_1.define)('UserEntity', function (data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
});
exports.AdminEntity = exports.UserEntity.define('AdminEntity', function (data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.role = data.role;
    this.permissions = data.permissions || [];
});
exports.SuperAdminEntity = exports.AdminEntity.define('SuperAdminEntity', function (data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.role = data.role;
    this.permissions = data.permissions || [];
    this.domain = data.domain;
});
//# sourceMappingURL=user.entity.js.map