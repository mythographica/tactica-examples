'use strict';

// ============================================
// Tactica Example - Use mnemonica directly!
// ============================================
// After running `npm run generate-types`, tactica generates
// .tactica/types.ts with all instance interfaces.
//
// Import the types and use them with mnemonica's define() and decorate().
// Note: generated types are named after the type itself (`UserType`),
// nested types use underscore paths (`UserType_AdminType`). We alias them
// to `*Instance` here because the const constructors below share those names.

import { define, decorate, apply } from 'mnemonica';
import type {
	UserType as UserTypeInstance,
	UserType_AdminType as AdminTypeInstance,
	UserType_AdminType_SuperAdminType as SuperAdminTypeInstance,
	Order as OrderInstance,
	SomeNewType as SomeNewTypeInstance
} from '../.tactica/types';


const SomeNewType_123 = define('SomeNewType', function  (this: SomeNewTypeInstance) {
    this.name = '';
    this.email = '';
	this.filed = 123;
});

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

// Apply SuperAdminType to user instance, level by level:
// apply() requires the type to be a DIRECT subtype constructor
// reachable on that instance — apply(user, SuperAdminType) throws
// WRONG_MODIFICATION_PATTERN because SuperAdminType hangs under AdminType
const appliedAdmin = apply(user, AdminType);
const appliedSuperAdmin = apply(appliedAdmin, SuperAdminType);
console.log('Applied SuperAdmin:', appliedSuperAdmin.isSystemAdmin, appliedSuperAdmin.accessLevel);

// Create a new chain starting from an AugmentedOrder instance
const anotherOrder = new Order() as OrderInstance;
const anotherAugmented = new anotherOrder.AugmentedOrder();
console.log('Another AugmentedOrder:', anotherAugmented.addition);

// SomeNewType demo (odd name with digits works too)
const someNew = new SomeNewType_123();
console.log('SomeNewType:', someNew.name, someNew.filed);

console.log('\n=== Example completed successfully! ===');

// AugmentedOrderNext is used through the mnemonica graph
// (new augmentedOrder.AugmentedOrderNext()), not by identifier
export {
	AugmentedOrderNext,
};

