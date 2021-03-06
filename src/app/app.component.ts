﻿import { Component } from '@angular/core';
import { LoginComponent } from './login/index';
import {HomeComponent } from './home/index'
import { UserService } from './_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls:['app.component.css']
})

export class AppComponent { 
    users=[];
    isclicked:boolean=false    
    constructor(private user:UserService){}

    shouldRun:boolean=false;
    ondrawerclick(agreed: boolean) {
        this.shouldRun=!agreed ? true : false;
        this.isclicked=!this.isclicked;
    }
    
      close(){
          
        this.isclicked=false;
      }
    
}