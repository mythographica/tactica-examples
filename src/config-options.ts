'use strict';

// ============================================
// Mnemonica Configuration Options Examples
// ============================================

import { define } from 'mnemonica';

// Default behavior - instance methods ARE exposed
const StandardType = define('StandardType', function (this: any) {
	this.data = 'standard';
});

// NOTE: `exposeInstanceMethods` config and the boolean shorthand
// (define(name, handler, false)) were removed from mnemonica 1.x —
// only the options below remain.

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

// ============================================
// Create Instances to Verify Everything Works
// ============================================

console.log('=== Config Options: Creating Instances ===\n');

// Create instances of each type
const standard = new StandardType();
console.log('Standard instance:', standard.data);

const strict = new StrictType();
console.log('Strict instance:', strict.data);

// Create subtypes and demonstrate inheritance
const standardSub = new standard.StandardSubtype();
console.log('StandardSubtype inherited:', standardSub.data, '| own:', standardSub.subtypeData);

console.log('\n=== Config Options: All instances created successfully! ===');

export {
	StandardType,
	StrictType,
	StandardSubtype,
};
