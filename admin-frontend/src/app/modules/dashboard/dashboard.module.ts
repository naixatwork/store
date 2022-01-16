import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {MatListModule} from "@angular/material/list";
import {ProductComponent} from './components/product/product.component';
import {ProductService} from "#modules/dashboard/components/product/product.service";
import {TableModule} from "#shared/components/table/table.module";
import {ProductBatchComponent} from './components/product/product-batch/product-batch.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {CustomerComponent} from './components/customer/customer.component';
import {CustomerService} from "#modules/dashboard/components/customer/customer.service";


@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    ProductComponent,
    ProductBatchComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    TableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBottomSheetModule
  ],
  providers: [ProductService, CustomerService]
})
export class DashboardModule {
}
