// Generated TypeRegistry for type-safe mnemonica.lookup()
// This file augments mnemonica's TypeRegistry via declaration merging.
//
// Usage:
//   import { lookup } from 'mnemonica';
//   import './.tactica/registry';  // applies the augmentation
//   const MyType = lookup('MyType');
//   // TypeScript knows: MyType is the typed constructor for MyType
//   const instance = new MyType({ /* constructor args */ });
//   // instance has full intellisense for the generated type

import type {
	StandardType,
	StandardType_StandardSubtype,
	StrictType,
	BaseEntity,
	BaseEntity_UserEntity,
	BaseEntity_UserEntity_AdminEntity,
	BaseEntity_ProductEntity,
	ConfigurableEntity,
	ExcludeExampleUser,
	ExcludeExampleOrder,
	UserType,
	UserType_AdminType,
	UserType_AdminType_SuperAdminType,
	Order,
	Order_AugmentedOrder,
	Order_AugmentedOrder_AugmentedOrderNext,
	SomeNewType,
	ProductType,
	ProductType_DigitalProductType,
	ProductType_PhysicalProductType,
	CustomerType,
	CustomerType_PremiumCustomerType,
	Invoice,
	Payment,
	ServiceType,
	ServiceType_WebServiceType,
	ServiceType_DatabaseServiceType,
	ConfigType,
	ConfigType_ProductionConfigType,
	Logger,
	Cache,
	StrictEntity,
	StrictEntity_StrictChild,
	BaseWithPrototype,
	BaseWithPrototype_DerivedFromBase,
	MyFnType,
	AssignType,
	MultiDecorated,
} from './types';

/**
 * Type registry augmenting mnemonica's TypeRegistry interface
 * This enables type-safe lookup() without explicit type arguments
 *
 * Usage: const SomeType = lookup('SomeType'); // Fully typed!
 */
declare module 'mnemonica' {
	interface TypeRegistry {
		'StandardType': new () => StandardType;
		'StandardType.StandardSubtype': new () => StandardType_StandardSubtype;
		'StrictType': new () => StrictType;
		'BaseEntity': new () => BaseEntity;
		'BaseEntity.UserEntity': new () => BaseEntity_UserEntity;
		'BaseEntity.UserEntity.AdminEntity': new () => BaseEntity_UserEntity_AdminEntity;
		'BaseEntity.ProductEntity': new () => BaseEntity_ProductEntity;
		'ConfigurableEntity': new () => ConfigurableEntity;
		'ExcludeExampleUser': new () => ExcludeExampleUser;
		'ExcludeExampleOrder': new () => ExcludeExampleOrder;
		'UserType': new () => UserType;
		'UserType.AdminType': new () => UserType_AdminType;
		'UserType.AdminType.SuperAdminType': new () => UserType_AdminType_SuperAdminType;
		'Order': new () => Order;
		'Order.AugmentedOrder': new () => Order_AugmentedOrder;
		'Order.AugmentedOrder.AugmentedOrderNext': new () => Order_AugmentedOrder_AugmentedOrderNext;
		'SomeNewType': new () => SomeNewType;
		'ProductType': new () => ProductType;
		'ProductType.DigitalProductType': new () => ProductType_DigitalProductType;
		'ProductType.PhysicalProductType': new () => ProductType_PhysicalProductType;
		'CustomerType': new () => CustomerType;
		'CustomerType.PremiumCustomerType': new () => CustomerType_PremiumCustomerType;
		'Invoice': new () => Invoice;
		'Payment': new () => Payment;
		'ServiceType': new () => ServiceType;
		'ServiceType.WebServiceType': new () => ServiceType_WebServiceType;
		'ServiceType.DatabaseServiceType': new () => ServiceType_DatabaseServiceType;
		'ConfigType': new () => ConfigType;
		'ConfigType.ProductionConfigType': new () => ConfigType_ProductionConfigType;
		'Logger': new () => Logger;
		'Cache': new () => Cache;
		'StrictEntity': new () => StrictEntity;
		'StrictEntity.StrictChild': new () => StrictEntity_StrictChild;
		'BaseWithPrototype': new () => BaseWithPrototype;
		'BaseWithPrototype.DerivedFromBase': new () => BaseWithPrototype_DerivedFromBase;
		'MyFnType': new () => MyFnType;
		'AssignType': new (data: any) => AssignType;
		'MultiDecorated': new () => MultiDecorated;
	}
}

import type { TypeRegistry } from 'mnemonica';
export type { TypeRegistry };