import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './child/product/product.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'lazyloadproduct',
    loadChildren: () =>
      import('./child/child.module').then((m) => m.ChildModule),
  },
  {
    path: 'user',
    component: UserComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
