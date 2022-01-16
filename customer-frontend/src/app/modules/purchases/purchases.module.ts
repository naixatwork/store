import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PurchasesRoutingModule} from './purchases-routing.module';
import {PurchasesComponent} from './purchases.component';
import {PurchasesService} from "#modules/purchases/purchases.service";
import {TableModule} from "#shared/components/table/table.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    PurchasesComponent
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    TableModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    PurchasesService
  ]
})
export class PurchasesModule {
}
