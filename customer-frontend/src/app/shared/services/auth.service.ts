import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";
import {Router} from '@angular/router';
import {Customer} from "#shared/model/customer.model";
import {tap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private readonly httpClient: HttpClient, private readonly storageService: StorageService, private readonly router: Router) {
  }

  public login(body: any): Observable<Customer> {
    return this.httpClient.post<Customer>(`Customer/login?username=${body.username}&password=${body.password}`, {})
      .pipe(tap(() => {
        this.storageService.set({key: "cart", value: []});
      }));
  }

  public signUp(body: any): Observable<Customer> {
    return this.httpClient.post<Customer>(`Customer`, {...body})
      .pipe(tap(() => {
        this.storageService.set({key: "cart", value: []});
      }));
  }

  public logout(): void {
    this.storageService.remove('auth');
    this.storageService.remove('cart');
    this.router.navigate(['/auth']);
  }

  public storeCredentials(credentials: Customer): void {
    this.storageService.set({
      key: 'auth',
      value: credentials
    });
  }

  public isLoggedIn(): boolean {
    return this.storageService.has('auth');
  }
}
