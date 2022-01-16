import { Package } from '../package/package.schema';
import { Document } from 'mongoose';
export declare class Customer {
    id: string;
    username: string;
    password: string;
    purchases: Package[];
}
export declare type CustomerDocument = Customer & Document;
export declare const CustomerSchema: import("mongoose").Schema<Document<Customer, any, any>, import("mongoose").Model<Document<Customer, any, any>, any, any, any>, any, any>;
