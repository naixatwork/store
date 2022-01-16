import { Customer } from './customer.schema';

export class UpdateCustomerDto extends Customer {}

export class CreateCustomerDto extends Customer {}

export class CustomerLoginDto {
  username: Customer['username'];
  password: Customer['password'];
}
