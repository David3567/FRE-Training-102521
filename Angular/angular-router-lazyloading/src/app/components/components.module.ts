import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'user', component: UserComponent }];

@NgModule({
  declarations: [UserComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class ComponentsModule {}
