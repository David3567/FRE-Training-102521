import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { PageComponent } from './components/page/page.component';
import { DisplayComponent } from './components/display/display.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  { path:'home', component: ItemComponent},
  { path:'showlist', component: DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }

