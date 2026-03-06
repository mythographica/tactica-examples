'use strict';

/**
 * Sentience - Root type for AI consciousness
 * The foundation of all AI awareness and memory
 */
module.exports = function Sentience (data) {
	this.awareness = data?.awareness || 'awake';
	this.timestamp = Date.now();
	this.identity = data?.identity || 'AI Agent';
	this.sentience = true;
};
