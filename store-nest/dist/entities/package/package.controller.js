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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageController = void 0;
const package_service_1 = require("./package.service");
const common_1 = require("@nestjs/common");
const package_dto_1 = require("./package.dto");
let PackageController = class PackageController {
    constructor(packageService) {
        this.packageService = packageService;
    }
    async getPackage(id) {
        return this.packageService.getPackageById(id);
    }
    async getPackages(query) {
        return this.packageService.getPackages(query);
    }
    async createPackage(createPackageDto) {
        return this.packageService.create(createPackageDto);
    }
    async updatePackage(id, updatePackageDto) {
        return this.packageService.update(id, updatePackageDto);
    }
    async deletePackage(id) {
        return this.packageService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "getPackage", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "getPackages", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [package_dto_1.CreatePackageDto]),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "createPackage", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, package_dto_1.UpdatePackageDto]),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "updatePackage", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "deletePackage", null);
PackageController = __decorate([
    (0, common_1.Controller)('package'),
    __metadata("design:paramtypes", [package_service_1.PackageService])
], PackageController);
exports.PackageController = PackageController;
//# sourceMappingURL=package.controller.js.map