import {Customer} from '#shared/model/customer.model';
import {AuthService} from '#shared/services/auth.service';
import {Component, OnInit} from '@angular/core';
import {StorageService} from "#shared/services/storage.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public customer!: any;
  public purchasesCount: number = 0;

  constructor(private readonly authService: AuthService, private readonly storageService: StorageService) {
    if (this.isLoggedIn()) {
      this.customer = this.storageService.get<Customer>('auth') || {};
      this.purchasesCount = this.customer.purchases.length;
    }
  }

  ngOnInit(): void {
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
