import { PackageRepository } from './package.repository';
import { Package } from './package.schema';
import { UpdatePackageDto } from './package.dto';
export declare class PackageService {
    private readonly packageRepository;
    constructor(packageRepository: PackageRepository);
    getPackageById(id: string): Promise<Package>;
    getPackages(params?: any): Promise<Package[]>;
    create(newPackage: Required<Package>): Promise<Package>;
    update(id: string, newPackage: UpdatePackageDto): Promise<Package>;
    delete(id: string): Promise<Package>;
}
