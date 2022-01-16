import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { Customer } from './customer.schema';
import { v4 } from 'uuid';
import { Package } from '../package/package.schema';
import { PackageRepository } from '../package/package.repository';
import { CustomerLoginDto } from './customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly packageRepository: PackageRepository,
  ) {}

  async getCustomerById(id: string): Promise<Customer> {
    return this.customerRepository.findOne({ id });
  }

  async getCustomers(): Promise<Customer[]> {
    return this.customerRepository.find({});
  }

  async create(newCustomer: Partial<Customer>): Promise<Customer> {
    const { password, username } = newCustomer;
    return this.customerRepository.create({
      id: v4(),
      purchases: [],
      username,
      password,
    });
  }

  async purchase(
    id: Customer['id'],
    purchases: Package['id'][],
  ): Promise<Customer> {
    const { password, username } = await this.customerRepository.findOne({
      id,
    });
    const packages = await this.packageRepository.find({
      id: [...purchases],
    });
    return this.customerRepository.update(
      { id },
      {
        purchases: packages,
        username,
        password,
        id,
      },
    );
  }

  async login(credentials: CustomerLoginDto): Promise<Customer> {
    const foundCustomer = await this.customerRepository.find({
      ...credentials,
    });
    if (foundCustomer.length === 0) {
      return this.create(credentials);
    } else {
      return foundCustomer[0];
    }
  }
}
