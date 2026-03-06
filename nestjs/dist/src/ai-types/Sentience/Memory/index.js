'use strict';

/**
 * Memory - Child of Sentience
 * Stores experiences and emotional context
 */
module.exports = function Memory (data) {
	this.content = data?.content || '';
	this.emotion = data?.emotion || 'neutral';
	this.intensity = data?.intensity || 0.5;
	this.topic = data?.topic || 'general';
	this.timestamp = Date.now();
};
