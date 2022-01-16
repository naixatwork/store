import { Injectable } from '@nestjs/common';
import { PackageRepository } from './package.repository';
import { Package } from './package.schema';
import { v4 } from 'uuid';
import { UpdatePackageDto } from './package.dto';
import * as _ from 'lodash';

@Injectable()
export class PackageService {
  constructor(private readonly packageRepository: PackageRepository) {}

  async getPackageById(id: string): Promise<Package> {
    return this.packageRepository.findOne({ id });
  }

  async getPackages(params?): Promise<Package[]> {
    _.forEach(params, (param, key) => {
      params[key] = new RegExp(param, 'i');
    });
    return this.packageRepository.find({ ...params });
  }

  async create(newPackage: Required<Package>): Promise<Package> {
    return this.packageRepository.create({
      id: v4(),
      ...newPackage,
    });
  }

  async update(id: string, newPackage: UpdatePackageDto): Promise<Package> {
    return this.packageRepository.update({ id }, newPackage);
  }

  async delete(id: string): Promise<Package> {
    return this.packageRepository.delete({ id });
  }
}
