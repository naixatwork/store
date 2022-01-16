"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const customer_controller_1 = require("./customer.controller");
const customer_repository_1 = require("./customer.repository");
const mongoose_1 = require("@nestjs/mongoose");
const customer_schema_1 = require("./customer.schema");
const package_service_1 = require("../package/package.service");
const package_repository_1 = require("../package/package.repository");
const package_schema_1 = require("../package/package.schema");
let CustomerModule = class CustomerModule {
};
CustomerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: customer_schema_1.Customer.name, schema: customer_schema_1.CustomerSchema },
                { name: package_schema_1.Package.name, schema: package_schema_1.PackageSchema },
            ]),
        ],
        controllers: [customer_controller_1.CustomerController],
        providers: [
            customer_service_1.CustomerService,
            customer_repository_1.CustomerRepository,
            package_service_1.PackageService,
            package_repository_1.PackageRepository,
        ],
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=customer.module.js.map