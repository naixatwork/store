import {Injectable} from '@angular/core';
import {StorageService} from "#shared/services/storage.service";
import {Product} from "#shared/model/product.model";
import {Customer} from "#shared/model/customer.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private readonly storageService: StorageService, private readonly httpClient: HttpClient) {
  }

  public getPurchases(): Product[] {
    return this.storageService.get<Customer>('auth')?.purchases || [];
  }
}
