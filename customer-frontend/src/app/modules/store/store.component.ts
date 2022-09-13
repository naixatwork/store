import {Product} from '#shared/model/product.model';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from './store.service';
import {debounceTime, Observable, Subject} from "rxjs";
import {FormControl} from "@angular/forms";
import {takeUntil} from "rxjs/operators";
import {StorageService} from "#shared/services/storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {
  public products$: Observable<Product[]>;
  public searchControl = new FormControl('');
  private unsubscribeAll: Subject<never>;

  constructor(
    private readonly storeService: StoreService,
    private readonly storageService: StorageService,
    private readonly matSnackBar: MatSnackBar
  ) {
    this.products$ = this.storeService.getProducts();
    this.unsubscribeAll = new Subject<never>();
  }

  ngOnInit(): void {
    this.onSearchChange();
  }

  public onSearchChange(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      takeUntil(this.unsubscribeAll)
    ).subscribe((value) => {
      this.products$ = this.storeService.getProducts(value)
    })
  }

  public purchase(product: Product): void {
    this.storeService.purchaseProduct(product);
    this.matSnackBar.open("Item has been added to your cart list", "Dismiss")
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.complete();
  }
}
