import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicExampleComponent } from './basic/basic.component';
import { DynamicNgForComponent } from './dynamic-ng-for/dynamic-ng-for.component';

const routes: Routes = [
  // { path: '', component: BasicExampleComponent, pathMatch: 'full' },
  //   { path: 'dynamicChanges', component: DynamicChangesExampleComponent },
  //   { path: 'scrollOverflow', component: ScrollOverflowExampleComponent },
  //   { path: 'typeDefinitions', component: TypeExampleComponent },
  // { path: 'dynamicNgFor', component: DynamicNgForComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
