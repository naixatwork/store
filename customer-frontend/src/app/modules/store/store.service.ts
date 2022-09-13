import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Product} from "#shared/model/product.model";
import {AuthService} from "#shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {CustomerService} from "#shared/services/customer.service";
import {StorageService} from "#shared/services/storage.service";
import {Customer} from '#shared/model/customer.model';
import {tap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class StoreService {
  public cart$ = new BehaviorSubject<Product[]>(this.storageService.get("cart") || [])

  constructor(public readonly httpClient: HttpClient,
              private readonly authService: AuthService,
              private readonly matSnackBar: MatSnackBar,
              private readonly router: Router,
              private readonly customerService: CustomerService,
              private readonly storageService: StorageService) {
    this.cart$.subscribe((products) => {
      this.storageService.update({key: "cart", value: products});
    });
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
    const addToCart = (customer: Customer) => {
      this.cart$.next([...this.cart$.value, product]);

    };

    const redirectToAuth = () => {
      this.router.navigate(["/auth"]);
      this.matSnackBar.open("Please complete the authentication process", 'Dismiss')
    };

    const customer: Customer | null = this.storageService.get("auth");
    if (customer) {
      addToCart(customer);
    } else {
      redirectToAuth();
    }
  }
}
