import { Customer, CustomerDocument } from './customer.schema';
import { FilterQuery, Model } from 'mongoose';
import { UpdateCustomerDto } from './customer.dto';
export declare class CustomerRepository {
    private readonly customerModel;
    constructor(customerModel: Model<CustomerDocument>);
    find(customerFilterQuery: FilterQuery<Customer>): Promise<CustomerDocument[]>;
    findOne(customerFilterQuery: FilterQuery<Customer>): Promise<CustomerDocument>;
    create(newCustomer: Customer): Promise<Customer>;
    update(customerFilterQuery: FilterQuery<Customer>, customerData: UpdateCustomerDto): Promise<Customer>;
}
