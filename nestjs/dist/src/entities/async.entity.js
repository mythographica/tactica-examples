"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubDecorate = exports.SubAsync = exports.SyncBase = exports.ResultFromDecorate = exports.RootAsync = void 0;
const mnemonica_1 = require("mnemonica");
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
exports.RootAsync = (0, mnemonica_1.define)('RootAsync', async function (data) {
    await sleep(100);
    this.value = data.value;
    this.computed = data.value * 2;
    return this;
});
exports.ResultFromDecorate = exports.RootAsync.define('ResultFromDecorate', function (multiplier) {
    this.result = this.computed * multiplier;
    this.timestamp = Date.now();
    return this;
});
exports.SyncBase = (0, mnemonica_1.define)('SyncBase', function (data) {
    this.baseValue = data.baseValue;
    this.baseValue += '123';
});
exports.SubAsync = exports.SyncBase.define('SubAsync', async function (asyncData) {
    await sleep(100);
    this.delay = asyncData.delay;
    this.extra = asyncData.extra;
    this.processed = `${this.baseValue}-${asyncData.extra}`;
    this.baseValue += '123';
    return this;
});
exports.SubDecorate = exports.SubAsync.define('SubDecorate', function (decorateValue) {
    this.decorateValue = decorateValue;
    this.combined = `${this.processed}:${decorateValue}`;
    return this;
});
//# sourceMappingURL=async.entity.js.map