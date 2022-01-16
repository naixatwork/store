import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {admin} from "#modules/auth/sign-in/auth.model";
import {StorageService} from "./storage.service";
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private readonly httpClient: HttpClient, private readonly storageService: StorageService, private readonly router: Router) {
  }

  public login(body: admin): Observable<boolean> {
    return this.httpClient.post<boolean>('admin/login', {...body});
  }

  public logout(): void {
    this.storageService.remove('auth');
    this.router.navigate(['/auth']);
  }

  public storeCredentials(credentials: admin): void {
    this.storageService.set({
      key: 'auth',
      value: credentials
    });
  }
}
