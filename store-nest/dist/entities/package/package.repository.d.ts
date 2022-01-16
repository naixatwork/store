import { Package, PackageDocument } from './package.schema';
import { FilterQuery, Model } from 'mongoose';
import { UpdatePackageDto } from './package.dto';
export declare class PackageRepository {
    private readonly packageModel;
    constructor(packageModel: Model<PackageDocument>);
    find(packagesFilterQuery: FilterQuery<Package>): Promise<PackageDocument[]>;
    findOne(packageFilterQuery: FilterQuery<Package>): Promise<PackageDocument>;
    create(newPackage: Package): Promise<Package>;
    update(packagesFilterQuery: FilterQuery<Package>, packageData: UpdatePackageDto): Promise<Package>;
    delete(packagesFilterQuery: FilterQuery<Package>): Promise<Package>;
}
