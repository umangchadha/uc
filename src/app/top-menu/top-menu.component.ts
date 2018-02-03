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

  @Input() userinfo;
  @Output() ondrawerclick= new EventEmitter<boolean>();

isclicked:boolean;
icoo="fa-bars";
  constructor(private users:UserService) { }

  ngOnInit() {}

   drawerClick(){
     
       this.isclicked=!this.isclicked;
      !this.isclicked?this.icoo="fa-bell-o":this.icoo;
       this.ondrawerclick.emit(!this.isclicked);
    
    }


}
