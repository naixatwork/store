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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const customer_repository_1 = require("./customer.repository");
const uuid_1 = require("uuid");
const package_repository_1 = require("../package/package.repository");
let CustomerService = class CustomerService {
    constructor(customerRepository, packageRepository) {
        this.customerRepository = customerRepository;
        this.packageRepository = packageRepository;
    }
    async getCustomerById(id) {
        return this.customerRepository.findOne({ id });
    }
    async getCustomers() {
        return this.customerRepository.find({});
    }
    async create(newCustomer) {
        const { password, username } = newCustomer;
        return this.customerRepository.create({
            id: (0, uuid_1.v4)(),
            purchases: [],
            username,
            password,
        });
    }
    async purchase(id, purchases) {
        const { password, username } = await this.customerRepository.findOne({
            id,
        });
        const packages = await this.packageRepository.find({
            id: [...purchases],
        });
        return this.customerRepository.update({ id }, {
            purchases: packages,
            username,
            password,
            id,
        });
    }
    async login(credentials) {
        const foundCustomer = await this.customerRepository.find(Object.assign({}, credentials));
        if (foundCustomer.length === 0) {
            return this.create(credentials);
        }
        else {
            return foundCustomer[0];
        }
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [customer_repository_1.CustomerRepository,
        package_repository_1.PackageRepository])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map