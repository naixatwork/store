import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "#modules/dashboard/dashboard.component";
import {ProductComponent} from "#modules/dashboard/components/product/product.component";
import {CustomerComponent} from "#modules/dashboard/components/customer/customer.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'package',
        component: ProductComponent
      },
      {
        path: 'customer',
        component: CustomerComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'exact',
    redirectTo: 'package'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
