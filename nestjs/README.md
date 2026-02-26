# NestJS + Mnemonica + Tactica Integration Example

This example demonstrates how to use **mnemonica** with **NestJS** for runtime inheritance in DTOs/entities, along with **@mnemonica/tactica** for TypeScript type generation.

## Tactica Integration

This project includes **@mnemonica/tactica** which generates TypeScript types from mnemonica entities:

```typescript
// src/entities/user.entity.ts
/// <reference types="../../.tactica/types" />
import type { UserEntityInstance, AdminEntityInstance, SuperAdminEntityInstance } from '../../.tactica/types';
```

### Tactica Scripts

```bash
# Generate types from mnemonica entities
npm run tactica:generate

# Watch mode for development (auto-regenerate on file changes)
npm run tactica:watch
```

The generated types are located in `.tactica/types.ts` and are excluded from git via `.gitignore`.

## Overview

This example shows:

1. **Mnemonica `define()`** - Creating type hierarchies with inheritance
2. **NestJS Validation** - Using class-validator with mnemonica entities
3. **Swagger Documentation** - API docs at `/api-docs`
4. **Three-level Inheritance** - User → Admin → SuperAdmin
5. **Integration Pattern** - How mnemonica works within a NestJS application

## Project Structure

```
src/
├── dto/
│   └── user.dto.ts          # Standard NestJS DTOs with class-validator & Swagger
├── entities/
│   └── user.entity.ts       # Mnemonica entities with define()
├── user.controller.ts       # NestJS controllers with Swagger decorators
├── user.service.ts          # NestJS services
├── app.module.ts            # NestJS module
└── main.ts                  # Bootstrap with Swagger setup
```

## Key Concepts

### Mnemonica Entities (entities/user.entity.ts)

Using `define()` instead of `@decorate()` for cleaner integration:

```typescript
export const UserEntity = define('UserEntity', function (this: UserData, data: UserData) {
  this.id = data.id;
  this.email = data.email;
  this.name = data.name;
});

export const AdminEntity = UserEntity.define('AdminEntity', function (this: AdminData, data: AdminData) {
  // Inherits from UserEntity
  this.id = data.id;
  this.email = data.email;
  this.name = data.name;
  this.role = data.role;
  this.permissions = data.permissions || [];
});
```

### Swagger Integration

Swagger UI is available at `http://localhost:3000/api-docs` when the server is running.

All DTOs and controllers are decorated with Swagger annotations for automatic API documentation.

## Installation

```bash
npm install
```

## Running the Example

```bash
# Development
npm run start:dev

# Build and run
npm run build
npm start
```

The server will start on `http://localhost:3000` with Swagger docs at `http://localhost:3000/api-docs`.

## API Endpoints

### Swagger Documentation
- **URL:** `http://localhost:3000/api-docs`
- Interactive API documentation with try-it feature

### Users
- `POST /users` - Create a user
- `GET /users/:id` - Get a user

### Admins
- `POST /admins` - Create an admin (inherits User properties)
- `GET /admins/:id` - Get an admin

### Super Admins
- `POST /super-admins` - Create a super admin (3-level inheritance)
- `GET /super-admins/:id` - Get a super admin

## Example Requests

Using the Swagger UI at `http://localhost:3000/api-docs`:

1. Navigate to the Swagger UI
2. Expand the desired endpoint (e.g., `POST /users`)
3. Click "Try it out"
4. Enter the request body:
   ```json
   {
     "email": "user@example.com",
     "name": "John Doe"
   }
   ```
5. Click "Execute"

Or using curl:

```bash
# Create a user
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","name":"John"}'

# Create an admin
curl -X POST http://localhost:3000/admins \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","name":"Admin","role":"admin","permissions":["read","write"]}'

# Create a super admin
curl -X POST http://localhost:3000/super-admins \
  -H "Content-Type: application/json" \
  -d '{"email":"super@example.com","name":"Super","role":"superadmin","permissions":["read","write","delete"],"domain":"global"}'
```

## How Tactica Detects This

When you run `npx tactica` in this project, it will:

1. Detect the `define()` calls in `entities/user.entity.ts`
2. Build the type hierarchy: UserEntity → AdminEntity → SuperAdminEntity
3. Generate type definitions in `.tactica/types.ts`

## Benefits of This Pattern

1. **Runtime Inheritance** - Mnemonica provides prototype chain inheritance
2. **Type Safety** - TypeScript interfaces ensure compile-time safety
3. **Validation** - class-validator ensures runtime data integrity
4. **API Documentation** - Swagger provides interactive API docs
5. **Clean Architecture** - Separation of concerns (DTOs, Entities, Controllers)

## Notes

- This example uses `define()` instead of `@decorate()` to avoid decorator conflicts
- The `new Entity(data)` pattern creates mnemonica instances
- Each entity has mnemonica's internal properties like `__type__`
- Swagger decorators provide automatic API documentation
