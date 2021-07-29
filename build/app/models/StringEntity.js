"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var StringEntity = /** @class */ (function () {
    function StringEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], StringEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('character varying', { length: 150 }),
        __metadata("design:type", String)
    ], StringEntity.prototype, "name", void 0);
    StringEntity = __decorate([
        typeorm_1.Entity('stringEncript')
    ], StringEntity);
    return StringEntity;
}());
exports.default = StringEntity;
