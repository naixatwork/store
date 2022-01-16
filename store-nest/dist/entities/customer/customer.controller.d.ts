import { CustomerService } from './customer.service';
import { Customer } from './customer.schema';
import { CreateCustomerDto, CustomerLoginDto } from './customer.dto';
import { Package } from '../package/package.schema';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    getCustomer(id: string): Promise<Customer>;
    getCustomers(): Promise<Customer[]>;
    createCustomer(customer: CreateCustomerDto): Promise<Customer>;
    customerLogin(credentials: CustomerLoginDto): Promise<Customer>;
    purchase(id: Customer['id'], packages: Package['id'][]): Promise<Customer>;
}
