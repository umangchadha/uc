import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../login/index';
import { HomeComponent } from '../home/index';
import { AuthenticationService, UserService } from '../_services/index';




@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {


  @Output() ondrawerclick= new EventEmitter<boolean>();

 @Input() isclicked:boolean

  constructor(private userService:UserService) { }

  ngOnInit() {}

   drawerClick(){
     
       this.isclicked=!this.isclicked;
      
       this.ondrawerclick.emit(!this.isclicked);
    
    }


}
