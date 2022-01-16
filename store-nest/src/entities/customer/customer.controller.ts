import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.schema';
import {
  CreateCustomerDto,
  CustomerLoginDto,
  UpdateCustomerDto,
} from './customer.dto';
import { Package } from '../package/package.schema';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':id')
  async getCustomer(@Param('id') id: string): Promise<Customer> {
    return this.customerService.getCustomerById(id);
  }

  @Get()
  async getCustomers(): Promise<Customer[]> {
    return this.customerService.getCustomers();
  }

  @Post()
  async createCustomer(@Body() customer: CreateCustomerDto): Promise<Customer> {
    return this.customerService.create(customer);
  }

  @Post('login')
  async customerLogin(
    @Body() credentials: CustomerLoginDto,
  ): Promise<Customer> {
    return this.customerService.login(credentials);
  }

  @Patch('purchase/:id')
  async purchase(
    @Param('id') id: Customer['id'],
    @Body() packages: Package['id'][],
  ): Promise<Customer> {
    return this.customerService.purchase(id, packages);
  }
}
