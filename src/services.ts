'use strict';

// ============================================
// Services - Third file to test multi-file tracing
// ============================================

import { define, decorate } from 'mnemonica';

// Service hierarchy
const ServiceType = define('ServiceType', function (this: any) {
	this.id = '';
	this.name = '';
	this.description = '';
});

const WebServiceType = ServiceType.define('WebServiceType', function (this: any) {
	this.endpoint = '';
	this.method = 'GET';
});

const DatabaseServiceType = ServiceType.define('DatabaseServiceType', function (this: any) {
	this.connectionString = '';
	this.poolSize = 10;
});

// Config hierarchy
const ConfigType = define('ConfigType', function (this: any) {
	this.env = 'development';
	this.debug = false;
});

const ProductionConfigType = ConfigType.define('ProductionConfigType', function (this: any) {
	this.env = 'production';
	this.ssl = true;
	this.caching = true;
});

// More decorator examples
@decorate()
class Logger {
	level: 'debug' | 'info' | 'warn' | 'error' = 'info';
	prefix: string = '';
}

@decorate()
class Cache {
	ttl: number = 3600;
	maxSize: number = 1000;
}

// ============================================
// Create Instances to Verify Everything Works
// ============================================

console.log('=== Services: Creating Instances ===\n');

// Create service hierarchy
const service = new ServiceType();
console.log('Service:', service.id, service.name, service.description);

const webService = new service.WebServiceType();
console.log('WebService:', webService.id, webService.endpoint, webService.method);

const dbService = new service.DatabaseServiceType();
console.log('DatabaseService:', dbService.id, dbService.connectionString, dbService.poolSize);

// Create config hierarchy
const config = new ConfigType();
console.log('Config:', config.env, config.debug);

const prodConfig = new config.ProductionConfigType();
console.log('ProductionConfig:', prodConfig.env, prodConfig.ssl, prodConfig.caching);

// Create decorated class instances
const logger = new Logger() as LoggerInstance;
console.log('Logger:', logger.level, logger.prefix);

const cache = new Cache() as CacheInstance;
console.log('Cache:', cache.ttl, cache.maxSize);

console.log('\n=== Services: All instances created successfully! ===');

export {
	ServiceType,
	WebServiceType,
	DatabaseServiceType,
	ConfigType,
	ProductionConfigType,
	Logger,
	Cache,
};
