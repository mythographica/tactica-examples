"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mnemonica = __importStar(require("mnemonica"));
let GraphController = class GraphController {
    getSubtypes(Type) {
        const subtypes = [];
        try {
            if (Type && Type.subtypes) {
                Type.subtypes.forEach((SubType, name) => {
                    try {
                        subtypes.push({
                            name,
                            subtypes: this.getSubtypes(SubType)
                        });
                    }
                    catch (e) {
                        subtypes.push({ name, error: e.message });
                    }
                });
            }
        }
        catch (e) {
        }
        return subtypes;
    }
    getGraph() {
        const defaultCollection = mnemonica.defaultTypes;
        const hierarchy = {};
        if (defaultCollection && defaultCollection.subtypes) {
            defaultCollection.subtypes.forEach((Type, name) => {
                hierarchy[name] = {
                    name,
                    path: name,
                    subtypes: this.getSubtypes(Type)
                };
            });
        }
        const formatTree = (obj, indent = '') => {
            let result = '';
            for (const key of Object.keys(obj)) {
                const node = obj[key];
                result += `${indent}${node.name}\n`;
                if (node.subtypes && node.subtypes.length > 0) {
                    for (const sub of node.subtypes) {
                        result += formatTree({ [sub.name]: sub }, indent + '  ');
                    }
                }
            }
            return result;
        };
        const output = [
            '=== MNEMONICA TYPE HIERARCHY ===',
            `Timestamp: ${new Date().toISOString()}`,
            `Total Types: ${Object.keys(hierarchy).length}`,
            '',
            '=== TREE VIEW ===',
            formatTree(hierarchy),
            '',
            '=== JSON ===',
            JSON.stringify(hierarchy, null, 2)
        ].join('\n');
        return output;
    }
    getGraphJson() {
        const defaultCollection = mnemonica.defaultTypes;
        const hierarchy = {};
        if (defaultCollection && defaultCollection.subtypes) {
            defaultCollection.subtypes.forEach((Type, name) => {
                hierarchy[name] = {
                    name,
                    path: name,
                    subtypes: this.getSubtypes(Type)
                };
            });
        }
        return {
            success: true,
            hierarchy,
            typeCount: Object.keys(hierarchy).length,
            timestamp: new Date().toISOString()
        };
    }
};
exports.GraphController = GraphController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Header)('Content-Type', 'text/plain'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get mnemonica type hierarchy',
        description: 'Returns the complete type hierarchy as plain text for comparison with CDP data'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Type hierarchy retrieved successfully' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], GraphController.prototype, "getGraph", null);
__decorate([
    (0, common_1.Get)('json'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get mnemonica type hierarchy as JSON',
        description: 'Returns the complete type hierarchy as JSON'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Type hierarchy retrieved successfully' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], GraphController.prototype, "getGraphJson", null);
exports.GraphController = GraphController = __decorate([
    (0, swagger_1.ApiTags)('graph'),
    (0, common_1.Controller)('graph')
], GraphController);
//# sourceMappingURL=graph.controller.js.map