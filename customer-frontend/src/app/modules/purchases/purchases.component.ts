import {Component, OnInit} from '@angular/core';
import {CustomerService} from "#shared/services/customer.service";
import {Product} from '#shared/model/product.model';
import {Column, IndexColumn, Mode, OperationColumn, TableConfig} from "#shared/components/table/table.model";

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {
  public config: TableConfig<Product>;
  totalPrice: number = 0;

  constructor(private readonly customerService: CustomerService) {
    this.config = new TableConfig<Product>([], [], {
      mode: null,
      length: null,
    });

    for (const purchase of customerService.getPurchases()) {
      this.totalPrice += purchase.price
    }
  }

  ngOnInit(): void {
    this.configInit(this.customerService.getPurchases(), this.customerService.getPurchases().length)
  }

  private configInit(data: Array<Product>, length: number): void {
    this.config = new TableConfig<Product>(
      data,
      [
        new IndexColumn(),
        new Column('name'),
        new Column('price'),
      ],
      {mode: Mode.LOCAL, length}
    );
  }

}
