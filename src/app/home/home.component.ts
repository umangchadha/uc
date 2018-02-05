import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Observable,Subject } from 'rxjs';
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    
    constructor(private userService: UserService) {
         }
    ngOnInit() {
        // get users from secure api end point
            this.userService.getUsers() 
        }
       
      }