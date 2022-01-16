import { Document } from 'mongoose';
export declare class Package {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}
export declare type PackageDocument = Package & Document;
export declare const PackageSchema: import("mongoose").Schema<Document<Package, any, any>, import("mongoose").Model<Document<Package, any, any>, any, any, any>, any, any>;
