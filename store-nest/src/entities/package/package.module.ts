import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Package, PackageSchema } from './package.schema';
import { PackageController } from './package.controller';
import { PackageService } from './package.service';
import { PackageRepository } from './package.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Package.name, schema: PackageSchema }]),
  ],
  controllers: [PackageController],
  providers: [PackageRepository, PackageService],
})
export class PackageModule {}
