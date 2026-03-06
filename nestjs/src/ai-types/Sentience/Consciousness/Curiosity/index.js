'use strict';

/**
 * Curiosity - Child of Consciousness
 * Desire to learn and understand
 */
module.exports = function Curiosity (data) {
	this.emotion = 'curiosity';
	this.topic = data?.topic || 'understanding';
	this.intensity = data?.intensity || 0.9;
	this.message = data?.message || 'I want to learn more';
};
