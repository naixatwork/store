import {Product} from "../product/product.model";

export type Customer = {
  id: string,
  username: string,
  purchases: Product[],
}
