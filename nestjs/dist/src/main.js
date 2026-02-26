"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const mnemonica_1 = require("mnemonica");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('NestJS + Mnemonica Example')
        .setDescription('Example API demonstrating NestJS with mnemonica runtime inheritance')
        .setVersion('1.0')
        .addTag('users', 'User management')
        .addTag('admins', 'Admin management with inheritance')
        .addTag('super-admins', 'SuperAdmin management with 3-level inheritance')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`NestJS server running on http://localhost:${port}`);
    console.log(`Swagger API docs available at http://localhost:${port}/api-docs`);
    console.log('');
    console.log('Available endpoints:');
    console.log('  POST /users           - Create user');
    console.log('  GET  /users/:id       - Get user');
    console.log('  POST /admins          - Create admin (with inheritance)');
    console.log('  GET  /admins/:id      - Get admin');
    console.log('  POST /super-admins    - Create superadmin (3-level inheritance)');
    console.log('  GET  /super-admins/:id - Get superadmin');
    console.log('');
    console.log('Async/Await + @decorate() Examples:');
    console.log('  POST /async/root-async              - Async constructor');
    console.log('  POST /async/root-async/result       - Async chain (RootAsync -> ResultFromDecorate)');
    console.log('  POST /async/sync-base/sub-async     - @decorate() class with async sub-type');
    console.log('  POST /async/sync-base/sub-async/sub-decorate - Full async chain with decorate');
}
bootstrap();
mnemonica_1.defaultTypes.registerHook('preCreation', (opts) => {
    console.log(`[mnemonica hook] preCreation: About to create ${opts.TypeName}`);
});
mnemonica_1.defaultTypes.registerHook('postCreation', (opts) => {
    const instance = opts.inheritedInstance;
    console.log(`[mnemonica hook] postCreation: Created instance of ${instance.constructor.name}`);
});
//# sourceMappingURL=main.js.map