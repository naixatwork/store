import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./layout/main/main.component";
import {AuthGuard} from "#modules/auth/auth.guard";

const routes: Routes = [
  {
    path: 'store',
    loadChildren: () => import('#modules/store/store.module').then((m) => m.StoreModule),
    component: MainComponent
  },
  {
    path: 'purchase',
    loadChildren: () => import('#modules/purchases/purchases.module').then((m) => m.PurchasesModule),
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('#modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'store'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
