'use strict';

// ============================================
// Example: Using Global Type Augmentation
// ============================================
// This example uses global types from .tactica/index.d.ts
// Run with: npm run generate-types:global (uses --module-augmentation flag)
//
// NO IMPORTS NEEDED - types are globally available!
// This works because index.d.ts uses "declare global" to make types
// accessible without imports.

import { define, decorate } from 'mnemonica';

// ============================================
// Example 1: Basic Type Hierarchy with define()
// ============================================

const GlobalUserType = define('GlobalUserType', function (this: GlobalUserTypeInstance) {
	this.name = '';
	this.email = '';
	this.createdAt = new Date();
});

const GlobalAdminType = GlobalUserType.define('GlobalAdminType', function (this: GlobalAdminTypeInstance) {
	this.role = 'admin';
	this.permissions = ['read', 'write', 'delete'];
});

const GlobalSuperAdminType = GlobalAdminType.define('GlobalSuperAdminType', function (this: GlobalSuperAdminTypeInstance) {
	this.isSystemAdmin = true;
	this.accessLevel = 999;
});

// ============================================
// Example 2: Using @decorate() Decorator
// ============================================

@decorate()
class GlobalOrder {
	orderId: string = '';
	total: number = 0;
}

@decorate(GlobalOrder)
class GlobalAugmentedOrder {
	addition = '321';
}

@decorate(GlobalAugmentedOrder)
class GlobalAugmentedOrderNext {
	next = 123;
}

// ============================================
// Example 3: Runtime Usage with Type Safety
// ============================================

console.log('=== Global Example: Mnemonica Type Hierarchy ===\n');

// Create a user - hover here to see: const user: GlobalUserTypeInstance
const user = new GlobalUserType();
console.log('Created GlobalUser:', {
	name: user.name,
	email: user.email,
	createdAt: user.createdAt,
});

// Create an admin from the user instance
// Hover to see: const admin: GlobalAdminTypeInstance
const admin = new user.GlobalAdminType();
console.log('\nCreated GlobalAdmin from GlobalUser:', {
	name: admin.name,
	email: admin.email,
	role: admin.role,
	permissions: admin.permissions,
});

// Create a super admin from the admin instance
// Hover to see: const superAdmin: GlobalSuperAdminTypeInstance
const superAdmin = new admin.GlobalSuperAdminType();
console.log('\nCreated GlobalSuperAdmin from GlobalAdmin:', {
	name: superAdmin.name,
	email: superAdmin.email,
	role: superAdmin.role,
	permissions: superAdmin.permissions,
	isSystemAdmin: superAdmin.isSystemAdmin,
	accessLevel: superAdmin.accessLevel,
});


// Create an order using decorated class
// Cast to GlobalOrderInstance to access nested type constructors
const order = new GlobalOrder() as GlobalOrderInstance;
console.log('\nCreated GlobalOrder:', {
	orderId: order.orderId,
	total: order.total,
});

// Create augmented order from the instance
// GlobalAugmentedOrder is available on GlobalOrderInstance
const augmentedOrder = new order.GlobalAugmentedOrder();
console.log('\nCreated GlobalAugmentedOrder:', {
	orderId: augmentedOrder.orderId,
	total: augmentedOrder.total,
	addition: augmentedOrder.addition,
});

// Create the next level of augmentation
const augmentedOrderNext = new augmentedOrder.GlobalAugmentedOrderNext();
console.log('\nCreated GlobalAugmentedOrderNext:', {
	next: augmentedOrderNext.next,
});

console.log('\n=== Global Example completed successfully! ===');
