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
exports.PackageService = void 0;
const common_1 = require("@nestjs/common");
const package_repository_1 = require("./package.repository");
const uuid_1 = require("uuid");
const _ = require("lodash");
let PackageService = class PackageService {
    constructor(packageRepository) {
        this.packageRepository = packageRepository;
    }
    async getPackageById(id) {
        return this.packageRepository.findOne({ id });
    }
    async getPackages(params) {
        _.forEach(params, (param, key) => {
            params[key] = new RegExp(param, 'i');
        });
        return this.packageRepository.find(Object.assign({}, params));
    }
    async create(newPackage) {
        return this.packageRepository.create(Object.assign({ id: (0, uuid_1.v4)() }, newPackage));
    }
    async update(id, newPackage) {
        return this.packageRepository.update({ id }, newPackage);
    }
    async delete(id) {
        return this.packageRepository.delete({ id });
    }
};
PackageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [package_repository_1.PackageRepository])
], PackageService);
exports.PackageService = PackageService;
//# sourceMappingURL=package.service.js.map