# Tactica Example

This is a working example of using `@mnemonica/tactica` to generate TypeScript types for [mnemonica](https://github.com/wentout/mnemonica).

## Quick Start

```bash
# Install dependencies
npm install

# Generate types (default mode - explicit imports)
npm run generate-types

# Or generate types for global augmentation mode
npm run generate-types:global

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

- Generates `.tactica/types.ts` with `export type` aliases
- Import types explicitly: `import type { UserTypeInstance } from '../.tactica/types'`
- See `src/example-import.ts` for an example

### Global Mode: No Imports Needed

```bash
npm run generate-types:global
# Or: npx tactica --module-augmentation
```

- Generates `.tactica/index.d.ts` with `declare global`
- Types are available without imports (globally accessible)
- See `src/example-global.ts` for an example

### Triple-Slash Reference Mode

```bash
npm run generate-types:global
# Or: npx tactica --module-augmentation
```

- Same generation as Global Mode (produces `.tactica/index.d.ts`)
- Use `/// <reference types="../.tactica/index" />` directive in your file
- Alternative to tsconfig.json include for loading global types
- See `src/example-reference.ts` for an example

## Source Files

- **`src/example-import.ts`** - Example using explicit type imports (default mode)
- **`src/example-global.ts`** - Example using global types (--module-augmentation mode)
- **`src/example-reference.ts`** - Example using triple-slash reference directive
- **`src/example-exclude.ts`** - Example demonstrating the --exclude option
- **`src/index.ts`** - Main entry point with complete type hierarchy examples
- **`src/decorators.ts`** - @decorate() decorator examples
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

// Cast to OrderInstance to access nested constructors
const order = new Order() as OrderInstance;
const augmented = new order.AugmentedOrder(); // Works! Type: AugmentedOrderInstance
```

**Why casting is necessary:** TypeScript's declaration merging doesn't work across module boundaries. Since files with `import`/`export` are modules, the global interface augmentation in `.tactica/index.d.ts` cannot merge with module-scoped classes. The cast tells TypeScript to treat the instance as the augmented type that includes nested constructors.

**Note:** `define()` types work without casting because the returned constructor has the correct type signature built-in.

## CLI Options

### Watch Mode

For development, use watch mode to regenerate types on file changes:

```bash
# Watch mode for default (import-based) types
npm run watch-types

# Watch mode for global types
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
- Add to tsconfig.json: `"include": ["src/**/*.ts", ".tactica/types.ts"]`

**Global mode** (`npm run generate-types:global`):
- `.tactica/index.d.ts` - Global type declarations (no imports needed)
- Add to tsconfig.json: `"typeRoots": ["./node_modules/@types", "./.tactica"]`

## How It Works

1. **Write mnemonica code** in your source files:
   ```typescript
   import { define, decorate } from 'mnemonica';

   const UserType = define('UserType', function (this: UserTypeInstance) {
       this.name = '';
       this.email = '';
   });
   ```

2. **Run tactica** to generate types:
   ```bash
   npm run generate-types  # or :global for global mode
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
├── UserTypeInstance
│   ├── name: string
│   ├── email: string
│   └── AdminType → AdminTypeInstance
│       ├── role: string
│       ├── permissions: string[]
│       └── SuperAdminType → SuperAdminTypeInstance
│           ├── isSystemAdmin: boolean
│           └── accessLevel: number
```
