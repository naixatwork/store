import {Product} from "./product.model";

export type Customer = {
  id: string;
  username: string;
  password: string;
  purchases: Product[];
}
