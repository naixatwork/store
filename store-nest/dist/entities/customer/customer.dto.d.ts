import { Customer } from './customer.schema';
export declare class UpdateCustomerDto extends Customer {
}
export declare class CreateCustomerDto extends Customer {
}
export declare class CustomerLoginDto {
    username: Customer['username'];
    password: Customer['password'];
}
