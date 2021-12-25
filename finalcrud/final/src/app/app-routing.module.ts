import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { GameComponent } from './game/game.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'special',
    component: SpecialEventsComponent,
    canActivate:[RoleGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate:[AuthGuard]
  },
  {    path: 'user-list',
  component: UserListComponent,
  canActivate:[AuthGuard]
  },
  {    path: 'home',
  component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
