'use strict';

// ============================================
// Tactica Example - Use mnemonica directly!
// ============================================
// After running `npm run generate-types`, tactica generates
// .mnemonica/types.ts with all instance interfaces.
//
// Import the types and use them with mnemonica's define() and decorate().

import { define, decorate, apply } from 'mnemonica';
import type {
	UserTypeInstance,
	AdminTypeInstance,
	SuperAdminTypeInstance,
	OrderInstance,
} from '../.tactica/types';

// ============================================
// Example 1: Basic Type Hierarchy with define()
// ============================================

// Define a User type - use the instance type for 'this'
const UserType = define('UserType', function (this: UserTypeInstance) {
	this.name = '';
	this.email = '';
	this.createdAt = new Date();
});

// Define an Admin type that extends User
const AdminType = UserType.define('AdminType', function (this: AdminTypeInstance) {
	this.role = 'admin';
	this.permissions = ['read', 'write', 'delete'];
});

// Define a SuperAdmin type that extends Admin
const SuperAdminType = AdminType.define('SuperAdminType', function (this: SuperAdminTypeInstance) {
	this.isSystemAdmin = true;
	this.accessLevel = 999;
});

// ============================================
// Example 2: Using @decorate() Decorator
// ============================================
// The @decorate() decorator transforms classes into mnemonica types

@decorate()
class Order {
	orderId: string = '';
	total: number = 0;
}

@decorate(Order)
class AugmentedOrder {
	addition = '321'
}

@decorate(AugmentedOrder)
class AugmentedOrderNext {
	next = 123
}


// ============================================
// Example 3: Runtime Usage with Type Safety
// ============================================

console.log('=== Tactica Example: Mnemonica Type Hierarchy ===\n');

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
// Note: Type assertion needed because @decorate() transforms at runtime
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

// ============================================
// Example 4: Using SuperAdminType directly
// ============================================
// Create SuperAdmin instance directly to use the type definition

console.log('\n=== Using SuperAdminType directly ===');

// Create SuperAdmin from admin instance
const directSuperAdmin = new admin.SuperAdminType();
console.log('Direct SuperAdmin:', directSuperAdmin.isSystemAdmin, directSuperAdmin.accessLevel);

// Apply SuperAdminType to user instance
const appliedSuperAdmin = apply(user, SuperAdminType);
console.log('Applied SuperAdmin:', appliedSuperAdmin.isSystemAdmin, appliedSuperAdmin.accessLevel);

// Create a new chain starting from an AugmentedOrder instance
const anotherOrder = new Order() as OrderInstance;
const anotherAugmented = new anotherOrder.AugmentedOrder();
console.log('Another AugmentedOrder:', anotherAugmented.addition);

console.log('\n=== Example completed successfully! ===');

