import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "#shared/model/product.model";
import {AuthService} from "#shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {CustomerService} from "#shared/services/customer.service";
import {StorageService} from "#shared/services/storage.service";
import {Customer} from '#shared/model/customer.model';
import * as _ from "lodash";

@Injectable()
export class StoreService {

  constructor(public readonly httpClient: HttpClient,
              private readonly authService: AuthService,
              private readonly matSnackBar: MatSnackBar,
              private readonly router: Router,
              private readonly customerService: CustomerService,
              private readonly storageService: StorageService) {
  }

  public getProducts(searchName?: string): Observable<Product[]> {
    const params = new HttpParams().append('name', searchName || '')
    return this.httpClient.get<Product[]>('Product', {params}).pipe(
      map((products) => {
        if (!this.authService.isLoggedIn()) {
          return products;
        }
        const purchasedProducts = this.customerService.getPurchases();
        for (const product of products) {
          product.isAlreadyPurchased = false;
          for (const purchasedProduct of purchasedProducts) {
            if (product.id === purchasedProduct.id) {
              product.isAlreadyPurchased = true;
            }
          }
        }
        return products;

      })
    );
  }

  public purchaseProduct(product: Product): void {
    if (this.authService.isLoggedIn()) {
      const {id, purchases} = this.storageService.get<Customer>('auth') || {};
      if (!id) return;
      if (!purchases) return;
      this.httpClient.patch<Customer>(`Customer/${id}`, _.map([...purchases, product])).subscribe((response) => {
        this.storageService.update({key: 'auth', value: response})
      })
    } else {
      this.matSnackBar.open('Please log in first', 'Dismiss', {duration: 3000})
      this.router.navigate(['/auth'])
    }
  }
}
