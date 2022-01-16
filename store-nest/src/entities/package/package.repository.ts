import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Package, PackageDocument } from './package.schema';
import { FilterQuery, Model } from 'mongoose';
import { UpdatePackageDto } from './package.dto';

@Injectable()
export class PackageRepository {
  constructor(
    @InjectModel(Package.name)
    private readonly packageModel: Model<PackageDocument>,
  ) {}

  async find(
    packagesFilterQuery: FilterQuery<Package>,
  ): Promise<PackageDocument[]> {
    return this.packageModel.find(packagesFilterQuery);
  }

  async findOne(
    packageFilterQuery: FilterQuery<Package>,
  ): Promise<PackageDocument> {
    return this.packageModel.findOne(packageFilterQuery);
  }

  async create(newPackage: Package): Promise<Package> {
    return new this.packageModel(newPackage).save();
  }

  async update(
    packagesFilterQuery: FilterQuery<Package>,
    packageData: UpdatePackageDto,
  ): Promise<Package> {
    return this.packageModel.findOneAndUpdate(
      packagesFilterQuery,
      packageData,
      { new: true },
    );
  }

  async delete(packagesFilterQuery: FilterQuery<Package>): Promise<Package> {
    return this.packageModel.findOneAndDelete(packagesFilterQuery);
  }
}
