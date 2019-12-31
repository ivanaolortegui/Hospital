import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class VerifyTokenGuard implements CanActivate {
  constructor(
    public _userService: UserService,
    public router : Router
  ) { }
  canActivate(): Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this._userService.token;
    let payload = JSON.parse(atob(token.split('.')[1]));
    let expired = this.expired (payload.exp);
    if( expired) {
      return false;
    }
    return this.verifyRenew( payload.exp);
  }
  verifyRenew (expiredDate: number): Promise<boolean> {
    return new Promise ((resolve, reject)=> {
      let tokenExp = new Date (expiredDate * 1000);
      let now = new Date();
      now.setTime ( now.getTime() + (1 * 60 * 60 * 1000));
      if( tokenExp.getTime()> now.getTime()){
        resolve(true);
      } else {
        this._userService.RenewToken()
        .subscribe(()=> {
          resolve (true);
        }, () => {
          reject(false);
        });
      }   
    });
  
  }
  expired(expiredDate: number) {
    let now = new Date().getTime()/ 1000;
    if( expiredDate < now) {
      this.router.navigate(['/login']);
    } else {
      return false;
    }
   }
}
