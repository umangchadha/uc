import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthGuard } from './auth.guard'

@Injectable()
export class AntiauthService {
 
  constructor(private router: Router,private authService: AuthGuard) { }

 canActivate() {
  if (localStorage.getItem('currentUser')) {
            // logged in so return false
            return true;
        }

        // not logged in so redirect to login page
       this.router.navigate(['/login']);
        return true;
  }
}
