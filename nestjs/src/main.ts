import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

/**
 * NestJS Bootstrap with Swagger
 * Demonstrates integration with mnemonica and typeomatica
 */
async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// Enable global validation pipe
	app.useGlobalPipes(new ValidationPipe({
		transform: true,
		whitelist: true,
		forbidNonWhitelisted: true,
	}));

	// Setup Swagger
	const config = new DocumentBuilder()
		.setTitle('NestJS + Mnemonica Example')
		.setDescription('Example API demonstrating NestJS with mnemonica runtime inheritance')
		.setVersion('1.0')
		.addTag('users', 'User management')
		.addTag('admins', 'Admin management with inheritance')
		.addTag('super-admins', 'SuperAdmin management with 3-level inheritance')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api-docs', app, document);

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
}

bootstrap();
