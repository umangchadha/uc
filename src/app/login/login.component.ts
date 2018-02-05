import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/index';
import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private user: UserService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        this.user.logout()
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
