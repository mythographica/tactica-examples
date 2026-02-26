import { define } from 'mnemonica';
import type {
	RootAsyncInstance,
	ResultFromDecorateInstance,
	SubAsyncInstance,
	SubDecorateInstance,
	SyncBaseInstance,
} from '../../.tactica/types';

// Helper for sleep simulation
const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

// =============================================================================
// Pattern 1: RootAsync with ResultFromDecorate sub-type (pure define chain)
// =============================================================================

export const RootAsync = define('RootAsync', async function (this: RootAsyncInstance, data: { value: number }) {
	await sleep(100);
	this.value = data.value;
	this.computed = data.value * 2;
	return this;
});

export const ResultFromDecorate = RootAsync.define('ResultFromDecorate', function (this: ResultFromDecorateInstance, multiplier: number) {
	this.result = this.computed * multiplier;
	this.timestamp = Date.now();
	return this;
});

// =============================================================================
// Pattern 2: Pure define chain with constructor function
// =============================================================================

// Base type with explicit baseValue property for tactica detection
export const SyncBase = define('SyncBase', function (this: SyncBaseInstance, data: { baseValue: string }) {
	this.baseValue = data.baseValue;
	this.baseValue += '123';
});

export const SubAsync = SyncBase.define('SubAsync', async function (this: SubAsyncInstance, asyncData: { delay: number; extra: string }) {
	await sleep(100);
	this.delay = asyncData.delay;
	this.extra = asyncData.extra;
	this.processed = `${this.baseValue}-${asyncData.extra}`;
        this.baseValue += '123';
	return this;
});

export const SubDecorate = SubAsync.define('SubDecorate', function (this: SubDecorateInstance, decorateValue: string) {
	this.decorateValue = decorateValue;
	this.combined = `${this.processed}:${decorateValue}`;
	return this;
});
