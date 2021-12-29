import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { CardComponent } from '../components/card/card.component';
// import { MessagesComponent } from '../components/messages/messages.component';
import { PostListComponent } from '../components/post-list/post-list.component';
import { AuthGuard } from '../components/auth/auth.guard';

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'users', component: AdminComponent, canActivate:[AuthGuard], data: {userRole: 'admin'},},
  {path: 'create', component: CardComponent, canActivate: [AuthGuard]},
  {path: 'edit/:postId', component: CardComponent, canActivate: [AuthGuard]},
  {path: 'auth', loadChildren: () => import('../components/auth/auth.module').then(m => m.AuthModule)

}
  // {path: 'auth', loadChildren: '../components/auth/auth.module#AuthModule'}
];
// /auth/auth.module#AuthModule

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
