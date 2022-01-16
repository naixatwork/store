import { PackageService } from './package.service';
import { Package } from './package.schema';
import { CreatePackageDto, UpdatePackageDto } from './package.dto';
export declare class PackageController {
    private readonly packageService;
    constructor(packageService: PackageService);
    getPackage(id: string): Promise<Package>;
    getPackages(query: any): Promise<Package[]>;
    createPackage(createPackageDto: CreatePackageDto): Promise<Package>;
    updatePackage(id: string, updatePackageDto: UpdatePackageDto): Promise<Package>;
    deletePackage(id: string): Promise<Package>;
}
