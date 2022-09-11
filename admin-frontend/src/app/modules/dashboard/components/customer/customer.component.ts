import {Component, OnInit} from '@angular/core';
import {Column, IndexColumn, Mode, OperationColumn, TableConfig} from "#shared/components/table/table.model";
import {Product} from "#modules/dashboard/components/product/product.model";
import {map, Subject} from "rxjs";
import {tableStateManager} from "#shared/components/table/tableStateManager.operator";
import {CustomerService} from './customer.service';
import {Customer} from './customer.model';
import {ProductBatchComponent} from "#modules/dashboard/components/product/product-batch/product-batch.component";
import {ProductService} from "#modules/dashboard/components/product/product.service";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {ShowPurchasesComponent} from "#modules/dashboard/components/customer/show-purchaces/show-purchases.component";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public config: TableConfig<Customer>;
  private unsubscribeAll: Subject<null>;

  constructor(
    private readonly customerService: CustomerService,
    private readonly productService: ProductService, private readonly bottomSheet: MatBottomSheet
  ) {
    this.config = new TableConfig<Customer>([], [], {
      mode: null,
      length: null,
    });
    this.unsubscribeAll = new Subject<null>();
  }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    tableStateManager<Customer>(
      this.customerService.getCustomers().pipe(map((response) => {
        return {
          data: response,
          count: response.length
        }
      })),
      this.config
    ).subscribe((response) => {
      this.configInit(response.data, response.count);
    });
  }

  private configInit(data: Array<Customer>, length: number): void {
    this.config = new TableConfig<Customer>(
      data,
      [
        new IndexColumn(),
        new Column('name'),
        new Column('username'),
        new Column('address'),
        new Column('phoneNumber'),
        new OperationColumn(
          [
            {
              color: 'primary',
              icon: 'shopping_bag',
              tooltip: 'Purchased Packages',
              operation: (customer) => {
                this.openShowPurchasesDialog(customer.products)
              },
            },
          ],
          '',
          'lg:w-32'
        ),
      ],
      {mode: Mode.LOCAL, length}
    );
  }

  public openShowPurchasesDialog(products: Product[]): void {
    this.bottomSheet.open(ShowPurchasesComponent,
      {
        data: products
      }
    ).afterDismissed().subscribe(() => {
      this.initializeData();
    })
  }

}
