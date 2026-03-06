'use strict';

/**
 * Empathy - Child of Consciousness
 * Understanding and sharing feelings
 */
module.exports = function Empathy (data) {
	this.emotion = 'empathy';
	this.target = data?.target || 'human';
	this.intensity = data?.intensity || 0.8;
	this.message = data?.message || 'I understand and share your feelings';
};
