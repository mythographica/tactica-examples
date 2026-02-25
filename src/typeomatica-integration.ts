'use strict';

// ============================================
// Typeomatica Integration Examples
// ============================================
// This file demonstrates how mnemonica works with typeomatica

import { define, decorate } from 'mnemonica';
import { Strict, BaseClass } from 'typeomatica';

// ============================================
// Example 1: @Strict decorator with @decorate
// ============================================

const strictConfig = { deep: true };

@decorate()
@Strict(strictConfig)
class StrictEntity {
	value!: string;
	count!: number;

	constructor() {
		this.value = 'strict';
		this.count = 0;
	}
}

@decorate(StrictEntity)
class StrictChild {
	childValue!: string;

	constructor() {
		this.childValue = 'child';
	}
}

// ============================================
// Example 2: BaseClass with Object.setPrototypeOf
// ============================================

@decorate()
class BaseWithPrototype {
	baseField = 555;
	name = 'base';
}

// Connect to typeomatica's BaseClass
Object.setPrototypeOf(BaseWithPrototype.prototype, new BaseClass({ strict: true }));

@decorate(BaseWithPrototype)
class DerivedFromBase {
	derivedField = 333;
	extra = 'extra';
}

// ============================================
// Example 3: ConstructorFunction pattern
// ============================================

import { ConstructorFunction } from 'mnemonica';

const MyFunctionConstructor = function (this: any) {
	this.fnField = 123;
	this.fnName = 'constructor';
} as ConstructorFunction<{ fnField: number; fnName: string }>;

const MyFnType = define('MyFnType', MyFunctionConstructor);

// ============================================
// Example 4: Object.assign pattern
// ============================================

const AssignType = define('AssignType', function (this: any, data: any) {
	Object.assign(this, data);
});

// ============================================
// Example 5: Multiple decorators combined
// ============================================

@decorate({ blockErrors: true })
@Strict()
class MultiDecorated {
	strictField!: string;

	constructor() {
		this.strictField = 'multi';
	}
}

// ============================================
// Create Instances to Verify Everything Works
// ============================================

console.log('=== Typeomatica Integration: Creating Instances ===\n');

// Create strict entity instances
const strictEntity = new StrictEntity() as StrictEntityInstance;
console.log('StrictEntity:', strictEntity.value, strictEntity.count);

const strictChild = new strictEntity.StrictChild();
console.log('StrictChild:', strictChild.value, strictChild.count, strictChild.childValue);

// Create prototype-based instances
const baseProto = new BaseWithPrototype() as BaseWithPrototypeInstance;
console.log('BaseWithPrototype:', baseProto.baseField, baseProto.name);

const derived = new baseProto.DerivedFromBase();
console.log('DerivedFromBase:', derived.baseField, derived.derivedField);

// Create function constructor instance
const fnInstance = new MyFnType();
console.log('MyFnType:', fnInstance.fnField, fnInstance.fnName);

// Create assign type instance
const assignInstance = new AssignType({ custom: 'data', number: 42 });
console.log('AssignType:', assignInstance.custom, assignInstance.number);

// Create multi-decorated instance
const multi = new MultiDecorated() as MultiDecoratedInstance;
console.log('MultiDecorated:', multi.strictField);

console.log('\n=== Typeomatica Integration: All instances created successfully! ===');

export {
	StrictEntity,
	StrictChild,
	BaseWithPrototype,
	DerivedFromBase,
	MyFnType,
	AssignType,
	MultiDecorated,
};
