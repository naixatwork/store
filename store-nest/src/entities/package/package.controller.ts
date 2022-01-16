import { PackageService } from './package.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Package } from './package.schema';
import { CreatePackageDto, UpdatePackageDto } from './package.dto';

@Controller('package')
export class PackageController {
  constructor(private readonly packageService: PackageService) {}

  @Get(':id')
  async getPackage(@Param('id') id: string): Promise<Package> {
    return this.packageService.getPackageById(id);
  }

  @Get()
  async getPackages(@Query() query: any): Promise<Package[]> {
    return this.packageService.getPackages(query);
  }

  @Post()
  async createPackage(
    @Body() createPackageDto: CreatePackageDto,
  ): Promise<Package> {
    return this.packageService.create(createPackageDto);
  }

  @Patch(':id')
  async updatePackage(
    @Param('id') id: string,
    @Body() updatePackageDto: UpdatePackageDto,
  ): Promise<Package> {
    return this.packageService.update(id, updatePackageDto);
  }

  @Delete(':id')
  async deletePackage(@Param('id') id: string): Promise<Package> {
    return this.packageService.delete(id);
  }
}
