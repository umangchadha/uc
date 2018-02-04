import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    users: User[] = [];
    constructor(private userService: UserService) {
        this.users=this.userService.users
        }
    ngOnInit() {
        // get users from secure api end point
            this.userService.getUsers() 
            console.log(this.users)              
        
        }
       
      }