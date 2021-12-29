import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService, private router : Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // throw new Error("Method not implemented.");
        // const isAuth = this.authService.getIsAuth();
        // if (!isAuth) {
        //     this.router.navigate(['login']);
        // }
        // return isAuth;
        let url: string = state.url;
        return this.checkUserLogin(route, url);
    }

    checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
        if (this.authService.getIsAuth()) {
          const userRole = this.authService.getUserRole();
          console.log(
            route.data['userRole'],
            route.data['userRole'].indexOf(userRole)
          );
    
          if (
            route.data['userRole'] &&
            route.data['userRole'].indexOf(userRole) === -1
          ) {
            this.router.navigate(['/']);
            return false;
          }
          return true;
        }
    
        this.router.navigate(['/']);
        return false;
      }

}  