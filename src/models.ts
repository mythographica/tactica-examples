'use strict';

// ============================================
// Additional Models - Multi-file Example
// ============================================

import { define, decorate } from 'mnemonica';

// Product hierarchy
const ProductType = define('ProductType', function (this: any) {
	this.id = '';
	this.name = '';
	this.price = 0;
});

const DigitalProductType = ProductType.define('DigitalProductType', function (this: any) {
	this.downloadUrl = '';
	this.fileSize = 0;
	this.format = 'digital';
});

const PhysicalProductType = ProductType.define('PhysicalProductType', function (this: any) {
	this.weight = 0;
	this.dimensions = { width: 0, height: 0, depth: 0 };
	this.inStock = false;
});

// Customer hierarchy
const CustomerType = define('CustomerType', function (this: any) {
	this.id = '';
	this.name = '';
	this.email = '';
});

const PremiumCustomerType = CustomerType.define('PremiumCustomerType', function (this: any) {
	this.loyaltyPoints = 0;
	this.membershipLevel = 'gold';
});

// Decorator examples
@decorate()
class Invoice {
	invoiceId: string = '';
	amount: number = 0;
	issuedAt: Date = new Date();
}

@decorate()
class Payment {
	paymentId: string = '';
	method: string = 'credit_card';
	status: 'pending' | 'completed' | 'failed' = 'pending';
}

// ============================================
// Create Instances to Verify Everything Works
// ============================================

console.log('=== Models: Creating Instances ===\n');

// Create product hierarchy
const product = new ProductType();
console.log('Product:', product.id, product.name, product.price);

const digitalProduct = new product.DigitalProductType();
console.log('DigitalProduct:', digitalProduct.id, digitalProduct.downloadUrl, digitalProduct.format);

const physicalProduct = new product.PhysicalProductType();
console.log('PhysicalProduct:', physicalProduct.id, physicalProduct.weight, physicalProduct.inStock);

// Create customer hierarchy
const customer = new CustomerType();
console.log('Customer:', customer.id, customer.name, customer.email);

const premiumCustomer = new customer.PremiumCustomerType();
console.log('PremiumCustomer:', premiumCustomer.id, premiumCustomer.loyaltyPoints, premiumCustomer.membershipLevel);

// Create decorated class instances
const invoice = new Invoice() as InvoiceInstance;
console.log('Invoice:', invoice.invoiceId, invoice.amount, invoice.issuedAt);

const payment = new Payment() as PaymentInstance;
console.log('Payment:', payment.paymentId, payment.method, payment.status);

console.log('\n=== Models: All instances created successfully! ===');

export {
	ProductType,
	DigitalProductType,
	PhysicalProductType,
	CustomerType,
	PremiumCustomerType,
	Invoice,
	Payment,
};
