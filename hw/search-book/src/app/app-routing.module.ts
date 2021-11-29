import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowlistComponent } from './components/showlist/showlist.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'showlist', component: ShowlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
