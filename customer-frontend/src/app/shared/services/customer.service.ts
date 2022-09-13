import {Injectable} from '@angular/core';
import {StorageService} from "#shared/services/storage.service";
import {Product} from "#shared/model/product.model";
import {Customer} from "#shared/model/customer.model";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private readonly router: Router,
    private readonly matSnackBar: MatSnackBar,
    private readonly storageService: StorageService, private readonly httpClient: HttpClient) {
  }

  public getPurchases(): Product[] {
    return this.storageService.get<Product[]>('cart') || [];
  }

  public buyProducts(): void {
    // this.httpClient.put("Customer/")
    const newProducts = [];
    for (const products of this.getPurchases()) {
      newProducts.push({
        description: products.description,
        price: products.price,
        name: products.name,
        imageUrl: products.imageUrl,
      })
      // products.id = null;
    }
    console.log(newProducts)

    const customer = this.storageService.get<Customer>("auth");
    if (!customer) return;
    this.httpClient.put(`Customer/${customer.id}`, newProducts).subscribe(() => {
      this.matSnackBar.open("Your purchase has been completed we will show admin!", 'Dismiss')
      window.open('https://idpay.ir/maahdi2000', "_blank")
    })
  }
}
