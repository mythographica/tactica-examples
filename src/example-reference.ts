'use strict';

// ============================================
// Example: Using Triple-Slash Reference Types
// ============================================
// This example uses the `/// <reference types="..." />` directive
// to load type declarations without ES6 imports.
//
// This is useful when:
// - You want to avoid ES6 import syntax for types
// - You're working with legacy code that uses reference directives
// - You want global types but prefer explicit references over tsconfig include
//
// Usage:
//   1. Run: npm run generate-types:global
//   2. The triple-slash directive below loads types from .tactica/index.d.ts
//
// Note: Unlike --module-augmentation with tsconfig include, this approach
// uses the reference directive directly in the source file.

/// <reference types="../.tactica/index" />

import { define, decorate } from 'mnemonica';

// ============================================
// Example 1: Basic Type Hierarchy with define()
// ============================================

const RefUserType = define('RefUserType', function (this: RefUserTypeInstance) {
	this.name = '';
	this.email = '';
	this.createdAt = new Date();
});

const RefAdminType = RefUserType.define('RefAdminType', function (this: RefAdminTypeInstance) {
	this.role = 'admin';
	this.permissions = ['read', 'write', 'delete'];
});

const RefSuperAdminType = RefAdminType.define('RefSuperAdminType', function (this: RefSuperAdminTypeInstance) {
	this.isSystemAdmin = true;
	this.accessLevel = 999;
});

// ============================================
// Example 2: Using @decorate() Decorator
// ============================================

@decorate()
class RefOrder {
	orderId: string = '';
	total: number = 0;
}

@decorate(RefOrder)
class RefAugmentedOrder {
	addition = '321';
}

@decorate(RefAugmentedOrder)
class RefAugmentedOrderNext {
	next = 123;
}

// ============================================
// Example 3: Runtime Usage with Type Safety
// ============================================

console.log('=== Reference Example: Mnemonica Type Hierarchy ===\n');

// Create a user - hover here to see: const user: RefUserTypeInstance
const user = new RefUserType();
console.log('Created RefUser:', {
	name: user.name,
	email: user.email,
	createdAt: user.createdAt,
});

// Create an admin from the user instance
// Hover to see: const admin: RefAdminTypeInstance
const admin = new user.RefAdminType();
console.log('\nCreated RefAdmin from RefUser:', {
	name: admin.name,
	email: admin.email,
	role: admin.role,
	permissions: admin.permissions,
});

// Create a super admin from the admin instance
// Hover to see: const superAdmin: RefSuperAdminTypeInstance
const superAdmin = new admin.RefSuperAdminType();
console.log('\nCreated RefSuperAdmin from RefAdmin:', {
	name: superAdmin.name,
	email: superAdmin.email,
	role: superAdmin.role,
	permissions: superAdmin.permissions,
	isSystemAdmin: superAdmin.isSystemAdmin,
	accessLevel: superAdmin.accessLevel,
});


// Create an order using decorated class
// Cast to RefOrderInstance to access nested type constructors
const order = new RefOrder() as RefOrderInstance;
console.log('\nCreated RefOrder:', {
	orderId: order.orderId,
	total: order.total,
});

// Create augmented order from the instance
// RefAugmentedOrder is available on RefOrderInstance
const augmentedOrder = new order.RefAugmentedOrder();
console.log('\nCreated RefAugmentedOrder:', {
	orderId: augmentedOrder.orderId,
	total: augmentedOrder.total,
	addition: augmentedOrder.addition,
});

// Create the next level of augmentation
const augmentedOrderNext = new augmentedOrder.RefAugmentedOrderNext();
console.log('\nCreated RefAugmentedOrderNext:', {
	next: augmentedOrderNext.next,
});

console.log('\n=== Reference Example completed successfully! ===');
