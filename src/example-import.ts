'use strict';

// ============================================
// Example: Using Explicit Type Imports
// ============================================
// This example imports types from .tactica/types.ts
// Run with: npm run generate-types (default mode, no flags needed)
//
// Types are imported explicitly from the generated types file.
// This is the default and recommended approach.

import { define, decorate } from 'mnemonica';
import type {
	UserTypeInstance,
	AdminTypeInstance,
	SuperAdminTypeInstance,
	OrderInstance,
	AugmentedOrderInstance,
	AugmentedOrderNextInstance,
} from '../.tactica/types';

// ============================================
// Example 1: Basic Type Hierarchy with define()
// ============================================

const UserType = define('UserType', function (this: UserTypeInstance) {
	this.name = '';
	this.email = '';
	this.createdAt = new Date();
});

const AdminType = UserType.define('AdminType', function (this: AdminTypeInstance) {
	this.role = 'admin';
	this.permissions = ['read', 'write', 'delete'];
});

const SuperAdminType = AdminType.define('SuperAdminType', function (this: SuperAdminTypeInstance) {
	this.isSystemAdmin = true;
	this.accessLevel = 999;
});

// ============================================
// Example 2: Using @decorate() Decorator
// ============================================

@decorate()
class Order {
	orderId: string = '';
	total: number = 0;
}

@decorate(Order)
class AugmentedOrder {
	addition = '321';
}

@decorate(AugmentedOrder)
class AugmentedOrderNext {
	next = 123;
}

// ============================================
// Example 3: Runtime Usage with Type Safety
// ============================================

console.log('=== Import Example: Mnemonica Type Hierarchy ===\n');

// Create a user - hover here to see: const user: UserTypeInstance
const user = new UserType();
console.log('Created User:', {
	name: user.name,
	email: user.email,
	createdAt: user.createdAt,
});

// Create an admin from the user instance
// Hover to see: const admin: AdminTypeInstance
const admin = new user.AdminType();
console.log('\nCreated Admin from User:', {
	name: admin.name,
	email: admin.email,
	role: admin.role,
	permissions: admin.permissions,
});

// Create a super admin from the admin instance
// Hover to see: const superAdmin: SuperAdminTypeInstance
const superAdmin = new admin.SuperAdminType();
console.log('\nCreated SuperAdmin from Admin:', {
	name: superAdmin.name,
	email: superAdmin.email,
	role: superAdmin.role,
	permissions: superAdmin.permissions,
	isSystemAdmin: superAdmin.isSystemAdmin,
	accessLevel: superAdmin.accessLevel,
});

// Create an order using decorated class
// Note: Type assertion needed when using explicit imports
const order = new Order() as OrderInstance;
console.log('\nCreated Order:', {
	orderId: order.orderId,
	total: order.total,
});

// Create augmented order from the instance
// AugmentedOrder is available on OrderInstance
const augmentedOrder = new order.AugmentedOrder();
console.log('\nCreated AugmentedOrder:', {
	orderId: augmentedOrder.orderId,
	total: augmentedOrder.total,
	addition: augmentedOrder.addition,
});

// Create the next level of augmentation
const augmentedOrderNext = new augmentedOrder.AugmentedOrderNext();
console.log('\nCreated AugmentedOrderNext:', {
	next: augmentedOrderNext.next,
});

console.log('\n=== Import Example completed successfully! ===');
