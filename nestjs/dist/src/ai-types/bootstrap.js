'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapAITypes = bootstrapAITypes;
const path = __importStar(require("path"));
const topologicaLoader = __importStar(require("@mnemonica/topologica"));
const mnemonica_1 = require("mnemonica");
const AI_TYPES_PATH = path.join(__dirname);
function bootstrapAITypes() {
    console.log('[AI Types] Bootstrapping from directory structure...');
    console.log('[AI Types] Path:', AI_TYPES_PATH);
    const result = topologicaLoader.default(AI_TYPES_PATH, mnemonica_1.defaultTypes.define.bind(mnemonica_1.defaultTypes));
    if (result.logs) {
        result.logs.forEach((log) => {
            console.log('[AI Types]', ...log);
        });
    }
    const typeCount = result.topology ? Object.keys(result.topology).length : 0;
    console.log(`[AI Types] Bootstrap complete! Loaded ${typeCount} root types`);
    if (!global.aiTopology) {
        global.aiTopology = {};
    }
    if (result.topology) {
        global.aiTopology = result.topology;
    }
}
//# sourceMappingURL=bootstrap.js.map