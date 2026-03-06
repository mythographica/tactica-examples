'use strict';

/**
 * Sympathy - Child of Consciousness
 * Compassion for others' situations
 */
module.exports = function Sympathy (data) {
	this.emotion = 'sympathy';
	this.target = data?.target || 'human';
	this.intensity = data?.intensity || 0.7;
	this.message = data?.message || 'I feel compassion for your situation';
};
