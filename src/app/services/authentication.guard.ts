import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';

import { AuthguardService } from './authService/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authservice:AuthguardService, private router: Router){}
  canActivate(): boolean{
    if (!this.Authservice.getToken()) {  
      this.router.navigateByUrl("/login");  
  }  
  return this.Authservice.getToken();
}
}
