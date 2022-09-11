import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from './customer.model';

@Injectable()
export class CustomerService {
  constructor(private readonly httpClient: HttpClient) {
  }

  public getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('Customer');
  }
}
