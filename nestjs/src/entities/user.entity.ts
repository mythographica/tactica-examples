import { define } from 'mnemonica';
import type {
	UserEntityInstance,
	AdminEntityInstance,
	SuperAdminEntityInstance,
	UserResponseInstance,
	AdminResponseInstance,
	SuperAdminResponseInstance,
} from '../../.tactica/types';

/**
 * User Entity defined with mnemonica
 * Using define() for runtime inheritance
 */
export const UserEntity = define('UserEntity', function (this: UserEntityInstance, data: { id: string; email: string; name: string }) {
	this.id = data.id;
	this.email = data.email;
	this.name = data.name;
});

/**
 * UserResponse - nested type for API responses
 * Demonstrates mnemonica's hierarchical type system
 * This is a sub-type of UserEntity, accessible as user.UserResponse
 */
export const UserResponse = UserEntity.define('UserResponse', function (
	this: UserResponseInstance,
	data: { id: string; email: string; name: string; type: 'user' }
) {
	this.id = data.id;
	this.email = data.email;
	this.name = data.name;
	this.type = data.type;
});

/**
 * Admin Entity extending User
 * This is a sub-type of UserEntity, accessible as user.AdminEntity
 */
export const AdminEntity = UserEntity.define('AdminEntity', function (this: AdminEntityInstance, data: { id: string; email: string; name: string; role: string; permissions: string[] }) {
	this.id = data.id;
	this.email = data.email;
	this.name = data.name;
	this.role = data.role;
	this.permissions = data.permissions || [];
});

/**
 * AdminResponse - nested type extending AdminEntity hierarchy
 * Demonstrates nested sub-type at second level
 * Accessible as admin.AdminResponse
 */
export const AdminResponse = AdminEntity.define('AdminResponse', function (
	this: AdminResponseInstance,
	data: { id: string; email: string; name: string; type: 'admin'; role: string; permissions: string[] }
) {
	this.id = data.id;
	this.email = data.email;
	this.name = data.name;
	this.type = data.type;
	this.role = data.role;
	this.permissions = data.permissions;
});

/**
 * SuperAdmin Entity extending Admin
 * Three-level inheritance hierarchy
 * This is a sub-type of AdminEntity, accessible as admin.SuperAdminEntity
 */
export const SuperAdminEntity = AdminEntity.define('SuperAdminEntity', function (this: SuperAdminEntityInstance, data: { id: string; email: string; name: string; role: string; permissions: string[]; domain: string }) {
	this.id = data.id;
	this.email = data.email;
	this.name = data.name;
	this.role = data.role;
	this.permissions = data.permissions || [];
	this.domain = data.domain;
});

/**
 * SuperAdminResponse - nested type at the top of hierarchy
 * Demonstrates three-level nested type inheritance
 * Accessible as superAdmin.SuperAdminResponse
 */
export const SuperAdminResponse = SuperAdminEntity.define('SuperAdminResponse', function (
	this: SuperAdminResponseInstance,
	data: { id: string; email: string; name: string; type: 'superadmin'; role: string; permissions: string[]; domain: string }
) {
	this.id = data.id;
	this.email = data.email;
	this.name = data.name;
	this.type = data.type;
	this.role = data.role;
	this.permissions = data.permissions;
	this.domain = data.domain;
});
