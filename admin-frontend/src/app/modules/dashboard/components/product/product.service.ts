import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "#modules/dashboard/components/product/product.model";

@Injectable()
export class ProductService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('Product');
  }

  public create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>('Product', {...product})
  }

  public update(product: Product): Observable<Product> {
    const {id} = product;
    return this.httpClient.put<Product>(`Product/${id}`, {...product})
  }

  public delete(product: Product): Observable<Product> {
    const {id} = product;
    return this.httpClient.delete<Product>(`Product/${id}`);
  }
}
