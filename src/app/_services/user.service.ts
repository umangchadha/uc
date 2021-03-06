﻿import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable,Subject } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    
    users;

        constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    
        }
        
    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
       this.http.get('/api/users', options)
       .map((response: Response) => response.json())
       .subscribe(users => {this.users=users 
              } );
     

     
            return this.users;
    }

    logout(){
      this.users=undefined  
    }


}
