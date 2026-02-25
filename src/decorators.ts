'use strict';

// ============================================
// Advanced Decorator Examples with Parent Classes
// ============================================

import { decorate } from 'mnemonica';

// Base class decorated with @decorate()
@decorate()
class BaseEntity {
	id: string = '';
	createdAt: Date = new Date();
	updatedAt: Date = new Date();
}

// Child class extending BaseEntity using @decorate(BaseEntity)
@decorate(BaseEntity)
class UserEntity {
	username: string = '';
	email: string = '';
	isActive: boolean = true;
}

// Another child class extending BaseEntity
@decorate(BaseEntity)
class ProductEntity {
	sku: string = '';
	name: string = '';
	price: number = 0;
}

// Deep inheritance: OrderEntity extends UserEntity (which extends BaseEntity)
@decorate(UserEntity)
class AdminEntity {
	role: string = 'admin';
	permissions: string[] = [];
}

// With configuration options (no parent, just options)
@decorate({ strictChain: false } as const)
class ConfigurableEntity {
	config: Record<string, unknown> = {};
}

// ============================================
// Create Instances to Verify Everything Works
// ============================================

console.log('=== Decorators: Creating Instances ===\n');

// Create base entity
const baseEntity = new BaseEntity() as BaseEntityInstance;
console.log('BaseEntity:', baseEntity.id, baseEntity.createdAt);

// Create user entity (extends BaseEntity)
const user = new baseEntity.UserEntity();
console.log('UserEntity:', user.id, user.username, user.email, user.isActive);

// Create product entity (extends BaseEntity)
const product = new baseEntity.ProductEntity();
console.log('ProductEntity:', product.id, product.sku, product.name, product.price);

// Create admin entity (extends UserEntity which extends BaseEntity)
const admin = new user.AdminEntity();
console.log('AdminEntity:', admin.id, admin.username, admin.role, admin.permissions);

// Create configurable entity
const configEntity = new ConfigurableEntity() as ConfigurableEntityInstance;
console.log('ConfigurableEntity:', configEntity.config);

console.log('\n=== Decorators: All instances created successfully! ===');

export {
	BaseEntity,
	UserEntity,
	ProductEntity,
	AdminEntity,
	ConfigurableEntity,
};
