# Tactica Example

This is a working example of using `@mnemonica/tactica` to generate TypeScript types for [mnemonica](https://github.com/wentout/mnemonica).

Pinned to the published stack: `mnemonica` 1.2.7, `typeomatica` 0.3.62, `@mnemonica/tactica` 0.1.9 (use `npm run use:local` to switch back to `file:` sibling checkouts for development).

## Quick Start

```bash
# Install dependencies
npm install

# Generate types (default mode - explicit imports)
npm run generate-types

# Build and run
npm run build
npm start
```

## Output Modes

Tactica supports two output modes:

### Default Mode: Explicit Imports (Recommended)

```bash
npm run generate-types
# Or: npx tactica
```

- Generates `.tactica/types.ts` with `export type` aliases (named after the
  type itself; nested types use underscore paths, e.g. `UserType_AdminType`)
- Also generates `registry.ts` (TypeRegistry augmentation for typed
  `lookup()`), `hierarchy.json` / `flow.json` (consumed by Mnemographica),
  `definitions.json`, `usages.json`, `hierarchy.txt`
- Import types explicitly, aliasing when the name collides with a local
  constructor: `import type { UserType as UserTypeInstance } from '../.tactica/types'`
- See `src/example-import.ts` for an example

### Global Mode (legacy — currently broken in tactica 0.1.9)

```bash
npm run generate-types:global
# Or: npx tactica --module-augmentation
```

- Generates `.tactica/index.d.ts` with `declare global`
- **Known issue:** tactica 0.1.9's global output declares both a `type` and
  an `interface` under every type name in the same global scope, which fails
  with `TS2300: Duplicate identifier`. The global-mode demos
  (`src/example-global.ts`, `src/example-reference.ts`) are excluded from
  `tsconfig.json` until tactica fixes global mode.
- The triple-slash variant (`/// <reference types="../.tactica/index" />`,
  see `src/example-reference.ts`) shares the same fate.

## Source Files

- **`src/index.ts`** - Main entry point with complete type hierarchy examples
- **`src/example-import.ts`** - Example using explicit type imports (default mode)
- **`src/example-global.ts`** - Global types demo (excluded from build: legacy mode broken in tactica 0.1.9)
- **`src/example-reference.ts`** - Triple-slash reference demo (same exclusion)
- **`src/example-exclude.ts`** - Example demonstrating the --exclude option
- **`src/decorators.ts`** - @decorate() decorator examples with parent classes
- **`src/config-options.ts`** - define() configuration options (`strictChain`, `blockErrors`)
- **`src/typeomatica-integration.ts`** - typeomatica `@Strict`/`BaseClass` integration
- **`src/models.ts`** - Additional model definitions
- **`src/services.ts`** - Service type examples

## Type Casting for @decorate() Classes

When using `@decorate()` on classes, you need to cast instances to access nested type constructors:

```typescript
@decorate()
class Order {
    orderId: string = '';
    total: number = 0;
}

@decorate(Order)
class AugmentedOrder {
    addition = '321';
}

// Cast to the generated Order type to access nested constructors.
// It is imported under an alias because the local class `Order`
// occupies the name in this module:
//   import type { Order as OrderInstance } from '../.tactica/types';
const order = new Order() as OrderInstance;
const augmented = new order.AugmentedOrder(); // Works! Type: Order_AugmentedOrder
```

**Why casting is necessary:** TypeScript's declaration merging doesn't work across module boundaries. Since files with `import`/`export` are modules, the generated global interface cannot merge with module-scoped classes — and the local class shadows the generated type of the same name. The aliased-import cast tells TypeScript to treat the instance as the augmented type that includes nested constructors.

**Note:** `define()` types work without casting because the returned constructor has the correct type signature built-in.

## CLI Options

### Watch Mode

For development, use watch mode to regenerate types on file changes:

```bash
# Watch mode for default (import-based) types
npm run watch-types

# Watch mode for global types (legacy — see the note in Output Modes)
npm run watch-types:global
```

### --exclude Option

Exclude specific files or patterns from type generation:

```bash
# Exclude a specific file
npx tactica --exclude "example-exclude.ts"

# Exclude test files
npx tactica --exclude "*.test.ts"

# Exclude multiple patterns (comma-separated)
npx tactica --exclude "*.test.ts,*.spec.ts"

# Exclude directories
npx tactica --exclude "test/*"

# Combine with other options
npx tactica --module-augmentation --exclude "*.test.ts"
```

See `src/example-exclude.ts` for a demonstration.

### --output Option

Specify a custom output directory:

```bash
npx tactica --output ./custom-types
```

### --include Option

Include only specific files or patterns:

```bash
npx tactica --include "src/models/*"
```

## Generated Files

**Default mode** (`npm run generate-types`):
- `.tactica/types.ts` - Exportable type aliases for explicit imports
- `.tactica/registry.ts` - TypeRegistry augmentation for typed `lookup()`
- `.tactica/hierarchy.json`, `flow.json`, `definitions.json`, `usages.json`,
  `hierarchy.txt` - graph data (Mnemographica renders from these)
- tsconfig.json: `"include": ["src/**/*.ts", ".tactica/types.ts"]`
- tsconfig.json also needs `"types": ["node"]` when `typeRoots` is set:
  without it, TypeScript tries to auto-include the deprecated empty
  `@types/chokidar` stub (a transitive tactica dependency) and fails with
  `TS2688: Cannot find type definition file for 'chokidar'`

**Global mode** (`npm run generate-types:global`, legacy — see Output Modes):
- `.tactica/index.d.ts` - Global type declarations

## How It Works

1. **Write mnemonica code** in your source files:
   ```typescript
   import { define, decorate } from 'mnemonica';
   import type { UserType as UserTypeInstance } from '../.tactica/types';

   const UserType = define('UserType', function (this: UserTypeInstance) {
       this.name = '';
       this.email = '';
   });
   ```

2. **Run tactica** to generate types:
   ```bash
   npm run generate-types
   ```

3. **Use the generated types** for `this` in constructor functions for full IntelliSense!

## Features Demonstrated

- **define() calls** - Type hierarchy with nested type constructors
- **@decorate() decorator** - Class decoration with automatic type detection
- **Property inference** - Automatic type inference from constructor assignments
- **Nested types** - Access child types through parent instances
- **Type casting** - Proper casting for @decorate() decorated classes

## Type Hierarchy

```
UserType
├── name: string
├── email: string
└── AdminType (UserType_AdminType)
    ├── role: string
    ├── permissions: string[]
    └── SuperAdminType (UserType_AdminType_SuperAdminType)
        ├── isSystemAdmin: boolean
        └── accessLevel: number
```
