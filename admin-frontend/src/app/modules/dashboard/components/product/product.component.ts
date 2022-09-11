import {Component, OnInit} from '@angular/core';
import {Column, IndexColumn, Mode, OperationColumn, TableConfig} from "#shared/components/table/table.model";
import {Product} from "#modules/dashboard/components/product/product.model";
import {first, map, Subject} from "rxjs";
import {tableStateManager} from "#shared/components/table/tableStateManager.operator";
import {ProductService} from "#modules/dashboard/components/product/product.service";
import {MatDialog} from "@angular/material/dialog";
import {ProductBatchComponent} from "#modules/dashboard/components/product/product-batch/product-batch.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public config: TableConfig<Product> = new TableConfig<Product>([], [], {
    mode: null,
    length: null,
  });

  private unsubscribeAll: Subject<null>;

  constructor(
    private readonly productService: ProductService, private readonly bottomSheet: MatBottomSheet
  ) {
    this.unsubscribeAll = new Subject<null>();
  }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    tableStateManager<Product>(
      this.productService.getProducts().pipe(map((response) => {
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

  private configInit(data: Array<Product>, length: number): void {
    this.config = new TableConfig<Product>(
      data,
      [
        new IndexColumn(),
        new Column('name'),
        new Column('price'),
        new OperationColumn(
          [
            {
              color: 'primary',
              icon: 'edit',
              tooltip: 'edit',
              operation: (product) => this.openBatchProductDialog(product),
            },
            {
              color: 'accent',
              icon: 'delete',
              tooltip: 'delete',
              operation: (product) => {
                this.deleteProduct(product);
              },
            }
          ],
          '',
          'lg:w-32'
        ),
      ],
      {mode: Mode.LOCAL, length}
    );
  }

  public openBatchProductDialog(product?: Product): void {
    this.bottomSheet.open(ProductBatchComponent,
      {
        data: product || null
      }
    ).afterDismissed().subscribe(() => {
      this.initializeData();
    })
  }

  private deleteProduct(product: Product): void {
    this.productService.delete(product).pipe(first()).subscribe(() => {
      this.initializeData();
    })
  }
}
