import {Component, OnInit} from '@angular/core';
import {Column, IndexColumn, Mode, OperationColumn, TableConfig} from "#shared/components/table/table.model";
import {Product} from "#modules/dashboard/components/product/product.model";
import {map, Subject} from "rxjs";
import {tableStateManager} from "#shared/components/table/tableStateManager.operator";
import {CustomerService} from './customer.service';
import {Customer} from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public config: TableConfig<Customer>;
  private unsubscribeAll: Subject<null>;

  constructor(private readonly customerService: CustomerService) {
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
        new Column('username'),
        new OperationColumn(
          [
            {
              color: 'primary',
              icon: 'shopping_bag',
              tooltip: 'Purchased Packages',
              operation: (customer) => {
                console.log(customer.purchases)
                let purchases = '';
                for (const purchase of customer.purchases) {
                  purchases += `${purchase.name}, `
                }
                alert(purchases)
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

}
