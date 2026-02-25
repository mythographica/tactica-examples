'use strict';

// ============================================
// Mnemonica Configuration Options Examples
// ============================================

import { define } from 'mnemonica';

// Default behavior - instance methods ARE exposed
const StandardType = define('StandardType', function (this: any) {
	this.data = 'standard';
});

// With exposeInstanceMethods: false - methods hidden from types
const HiddenMethodsType = define('HiddenMethodsType', function (this: any) {
	this.data = 'hidden';
}, {
	exposeInstanceMethods: false,
});

// With hideInstanceMethods shorthand (same as exposeInstanceMethods: false)
const HiddenTypeShorthand = define('HiddenTypeShorthand', function (this: any) {
	this.data = 'shorthand';
}, false);

// With other options
const StrictType = define('StrictType', function (this: any) {
	this.data = 'strict';
}, {
	strictChain: true,
	blockErrors: true,
});

// Subtypes inherit parent config but can override
const StandardSubtype = StandardType.define('StandardSubtype', function (this: any) {
	this.subtypeData = 'subtype';
});

const HiddenSubtype = HiddenMethodsType.define('HiddenSubtype', function (this: any) {
	this.subtypeData = 'hidden subtype';
});

// ============================================
// Create Instances to Verify Everything Works
// ============================================

console.log('=== Config Options: Creating Instances ===\n');

// Create instances of each type
const standard = new StandardType();
console.log('Standard instance:', standard.data);

const hidden = new HiddenMethodsType();
console.log('Hidden methods instance:', hidden.data);

const shorthand = new HiddenTypeShorthand();
console.log('Shorthand instance:', shorthand.data);

const strict = new StrictType();
console.log('Strict instance:', strict.data);

// Create subtypes and demonstrate inheritance
const standardSub = new standard.StandardSubtype();
console.log('StandardSubtype inherited:', standardSub.data, '| own:', standardSub.subtypeData);

const hiddenSub = new hidden.HiddenSubtype();
console.log('HiddenSubtype inherited:', hiddenSub.data, '| own:', hiddenSub.subtypeData);

console.log('\n=== Config Options: All instances created successfully! ===');

export {
	StandardType,
	HiddenMethodsType,
	HiddenTypeShorthand,
	StrictType,
	StandardSubtype,
	HiddenSubtype,
};
