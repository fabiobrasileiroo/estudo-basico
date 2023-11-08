import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Fabio'
  userData = {
    email: 'fabio.sas@email.com',
    role: 'Admin',
  }
  title = 'angular-basico';
}
