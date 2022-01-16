import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "#modules/dashboard/components/product/product.model";

@Injectable()
export class ProductService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('package');
  }

  public create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>('package', {...product})
  }

  public update(product: Product): Observable<Product> {
    const {id} = product;
    return this.httpClient.patch<Product>(`package/${id}`, {...product})
  }

  public delete(product: Product): Observable<Product> {
    const {id} = product;
    return this.httpClient.delete<Product>(`package/${id}`);
  }
}
