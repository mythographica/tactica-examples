import { Injectable, NotFoundException } from '@nestjs/common';
import type {
	UserEntityInstance,
	AdminEntityInstance,
	SuperAdminEntityInstance,
	UserResponseInstance,
	AdminResponseInstance,
	SuperAdminResponseInstance,
} from '../.tactica/types';

/**
 * User Service demonstrating mnemonica entity handling
 * Services receive already-created mnemonica instances from controllers
 * Returns mnemonica response instances demonstrating nested type hierarchy
 */
@Injectable()
export class UserService {
	private users: Map<string, UserEntityInstance> = new Map();
	private admins: Map<string, AdminEntityInstance> = new Map();
	private superAdmins: Map<string, SuperAdminEntityInstance> = new Map();

	/**
	 * Store a User entity and return a UserResponse instance
	 * Demonstrates creating nested sub-type instances using parent.SubType pattern
	 */
	createUser (user: UserEntityInstance): UserResponseInstance {
		this.users.set(user.id, user);
		// Create a UserResponse instance using mnemonica's parent.SubType pattern
		const userResponse = new user.UserResponse({
			id: user.id,
			email: user.email,
			name: user.name,
			type: 'user',
		});
		return userResponse;
	}

	/**
	 * Store an Admin entity and return an AdminResponse instance
	 * Demonstrates creating nested sub-type at second level of hierarchy
	 */
	createAdmin (admin: AdminEntityInstance): AdminResponseInstance {
		this.admins.set(admin.id, admin);
		// Create an AdminResponse instance using parent.SubType pattern
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

	/**
	 * Store a SuperAdmin entity and return a SuperAdminResponse instance
	 * Demonstrates creating nested sub-type at third level of hierarchy
	 */
	createSuperAdmin (superAdmin: SuperAdminEntityInstance): SuperAdminResponseInstance {
		this.superAdmins.set(superAdmin.id, superAdmin);
		// Create a SuperAdminResponse instance using parent.SubType pattern
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

	findUser (id: string): UserResponseInstance {
		const user = this.users.get(id);
		if (!user) {
			throw new NotFoundException(`User with id ${id} not found`);
		}
		const userResponse = new user.UserResponse({
			id: user.id,
			email: user.email,
			name: user.name,
			type: 'user',
		});
		return userResponse;
	}

	findAdmin (id: string): AdminResponseInstance {
		const admin = this.admins.get(id);
		if (!admin) {
			throw new NotFoundException(`Admin with id ${id} not found`);
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

	findSuperAdmin (id: string): SuperAdminResponseInstance {
		const superAdmin = this.superAdmins.get(id);
		if (!superAdmin) {
			throw new NotFoundException(`SuperAdmin with id ${id} not found`);
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
}
