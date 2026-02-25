'use strict';

// ============================================
// Example: Using --exclude Option
// ============================================
// This file demonstrates how --exclude works with tactica.
//
// The --exclude option allows you to exclude specific files or patterns
// from type generation. This is useful for:
// - Excluding test files
// - Excluding generated files
// - Excluding specific directories
// - Excluding files with certain naming patterns
//
// Usage:
//   npx tactica --exclude "*.test.ts"              # Exclude all test files
//   npx tactica --exclude "test/*"                 # Exclude test directory
//   npx tactica --exclude "*.spec.ts,*.test.ts"    # Exclude multiple patterns
//   npx tactica --exclude "generated/*"            # Exclude generated code
//
// This file is named 'example-exclude.ts' to demonstrate that it can be
// excluded from type generation using --exclude "example-exclude.ts"

import { define, decorate } from 'mnemonica';
import type { ExcludeExampleUserInstance } from '../.tactica/types';

// ============================================
// Example: User type that might be excluded
// ============================================

const ExcludeExampleUser = define('ExcludeExampleUser', function (this: ExcludeExampleUserInstance) {
	this.name = '';
	this.email = '';
});

// ============================================
// Example: Decorated class that might be excluded
// ============================================

@decorate()
class ExcludeExampleOrder {
	orderId: string = '';
	total: number = 0;
}

// ============================================
// Runtime Usage
// ============================================

console.log('=== Exclude Example ===\n');
console.log('This file demonstrates the --exclude option.');
console.log('Run: npx tactica --exclude "example-exclude.ts"');
console.log('To exclude this file from type generation.\n');

const user = new ExcludeExampleUser();
console.log('Created user:', user);

console.log('\n=== Exclude Example completed ===');
