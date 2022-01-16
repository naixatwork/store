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
exports.CustomerSchema = exports.Customer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const package_schema_1 = require("../package/package.schema");
let Customer = class Customer {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Customer.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Customer.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Customer.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)([package_schema_1.Package]),
    __metadata("design:type", Array)
], Customer.prototype, "purchases", void 0);
Customer = __decorate([
    (0, mongoose_1.Schema)()
], Customer);
exports.Customer = Customer;
exports.CustomerSchema = mongoose_1.SchemaFactory.createForClass(Customer);
//# sourceMappingURL=customer.schema.js.map