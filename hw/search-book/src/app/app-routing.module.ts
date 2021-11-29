import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { ShowlistComponent } from './components/showlist/showlist.component';

const routes: Routes = [
  { path: 'home', component: CardsComponent },
  { path: 'showlist', component: ShowlistComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
