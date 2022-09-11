import {Product} from "../product/product.model";

export type Customer = {
  id: string,
  username: string,
  password: string,
  name: string,
  address: string,
  phoneNumber: string
  products: Product[],
}
