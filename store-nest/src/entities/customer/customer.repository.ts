import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerDocument } from './customer.schema';
import { FilterQuery, Model } from 'mongoose';
import { Package } from '../package/package.schema';
import { UpdateCustomerDto } from './customer.dto';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectModel(Customer.name)
    private readonly customerModel: Model<CustomerDocument>,
  ) {}

  async find(
    customerFilterQuery: FilterQuery<Customer>,
  ): Promise<CustomerDocument[]> {
    return this.customerModel.find(customerFilterQuery);
  }

  async findOne(
    customerFilterQuery: FilterQuery<Customer>,
  ): Promise<CustomerDocument> {
    return this.customerModel.findOne(customerFilterQuery);
  }

  async create(newCustomer: Customer): Promise<Customer> {
    return new this.customerModel(newCustomer).save();
  }

  async update(
    customerFilterQuery: FilterQuery<Customer>,
    customerData: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customerModel.findOneAndUpdate(
      customerFilterQuery,
      customerData,
      { new: true },
    );
  }
}
