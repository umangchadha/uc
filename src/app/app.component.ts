import { Component } from '@angular/core';
import { LoginComponent } from './login/index';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent { 
     childmessage : string = "I am passed from Parent to child component"
    
}