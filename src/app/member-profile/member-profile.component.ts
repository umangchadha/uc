import { UserService } from './../_services/user.service';
import { LinkDataService } from './../_services/link-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {

  constructor(private pass:LinkDataService, private user:UserService) { }

  ngOnInit() {
  // get users from secure api end point
  this.user.getUsers()

  }

}
