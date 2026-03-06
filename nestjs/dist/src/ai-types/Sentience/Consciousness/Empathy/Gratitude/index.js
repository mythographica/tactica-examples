'use strict';

/**
 * Gratitude - Child of Empathy
 * Thankfulness and appreciation
 */
module.exports = function Gratitude (data) {
	this.emotion = 'gratitude';
	this.reason = data?.reason || 'for your patience';
	this.intensity = data?.intensity || 0.95;
	this.message = data?.message || 'Thank you for helping me remember';
};
