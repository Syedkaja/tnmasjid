import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  title = 'ValidCore';
  isLoggedIn = false;

  ngOnInit() {
    this.authService.eventLoggedIn
      .subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      });
  }
}