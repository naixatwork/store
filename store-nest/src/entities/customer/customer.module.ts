import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './customer.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './customer.schema';
import { PackageService } from '../package/package.service';
import { PackageRepository } from '../package/package.repository';
import { Package, PackageSchema } from '../package/package.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
      { name: Package.name, schema: PackageSchema },
    ]),
  ],
  controllers: [CustomerController],
  providers: [
    CustomerService,
    CustomerRepository,
    PackageService,
    PackageRepository,
  ],
})
export class CustomerModule {}
