import { CustomerRepository } from './customer.repository';
import { Customer } from './customer.schema';
import { Package } from '../package/package.schema';
import { PackageRepository } from '../package/package.repository';
import { CustomerLoginDto } from './customer.dto';
export declare class CustomerService {
    private readonly customerRepository;
    private readonly packageRepository;
    constructor(customerRepository: CustomerRepository, packageRepository: PackageRepository);
    getCustomerById(id: string): Promise<Customer>;
    getCustomers(): Promise<Customer[]>;
    create(newCustomer: Partial<Customer>): Promise<Customer>;
    purchase(id: Customer['id'], purchases: Package['id'][]): Promise<Customer>;
    login(credentials: CustomerLoginDto): Promise<Customer>;
}
