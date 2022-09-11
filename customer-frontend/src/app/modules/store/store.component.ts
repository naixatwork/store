import {Product} from '#shared/model/product.model';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from './store.service';
import {debounceTime, Observable, Subject} from "rxjs";
import {FormControl} from "@angular/forms";
import {takeUntil} from "rxjs/operators";
import {StorageService} from "#shared/services/storage.service";

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
    private readonly storageService: StorageService
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
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.complete();
  }
}
