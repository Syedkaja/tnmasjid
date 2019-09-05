import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from  '../auth/auth.service';
import { User } from './user.model';
import { LocalStorage } from 'ngx-store';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService ) { }

  @LocalStorage() user;
  loginErrorMsg: string;

  ngOnInit() {
  }

  login(form: NgForm) {        
    if ((form.value.loginEmail === 'admin') && (form.value.loginPassword === 'welcome123')) {
      this.authservice.grantAccess();
      this.router.navigate(['/dashboard']);
    } else {      
      this.loginErrorMsg = 'Invalid Credentials';
    }

    // this.authservice.signin(form.value.loginEmail, form.value.loginPassword)
    //     .subscribe(eventx => {
    //       if(eventx instanceof HttpResponse){
    //         let body = eventx.body;
    //         if(body['success']){
    //           let data = body ['user'];
    //           let user = new User(data['token'], data['name'], data['email']);
    //           this.user = user;
    //           this.authservice.grantAccess();
    //           this.router.navigate(['/dashboard']);
    //         }
    //       }
    //     })

  }

}
