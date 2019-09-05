import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { JwtHelper } from 'angular2-jwt';
import { environment } from '../../environments/environment';

declare var NGXSTORE_CONFIG: any;

@Injectable()
export class AuthService {

    constructor(private http: HttpClient,  private router: Router) { }

    @Output() eventLoggedIn: EventEmitter<boolean> = new EventEmitter();
    @Output() eventPage: EventEmitter<number> = new EventEmitter();

    isLoggedIn: boolean = false;
    baseUrl = environment.baseUrl;
    lsPrefix = NGXSTORE_CONFIG['prefix'];
    jwtHelper: JwtHelper = new JwtHelper();

    grantAccess() {
        this.isLoggedIn = true;
        this.eventLoggedIn.emit(this.isLoggedIn);
        localStorage.setItem('isLoggedIn', 'true');
    }

    revokeAccess() {
        this.isLoggedIn = false;
        this.eventLoggedIn.emit(this.isLoggedIn);
        localStorage.clear();
        this.router.navigate(['/auth']);
    }

    getToken(){
        if(this.isLoggedIn) {
            let user = JSON.parse(localStorage.getItem(this.lsPrefix + 'user'));
            let token = user['token'];
            if(!this.jwtHelper.isTokenExpired(token)) {
                return token;
            } else{
                return undefined;
            }
        }else {
            return undefined;
        }
    }

    isAuthenticated() {
        let user = JSON.parse(localStorage.getItem(this.lsPrefix + 'user'));
        if (user == null) {
            return false;
        }
        let token = user['token'];
        return !this.jwtHelper.isTokenExpired(token)
    }

    changePage(page: number) {
        this.eventPage.emit(page);
    }

    signin(email: string, password: string): Observable<HttpEvent<{}>> {
        let body = {};
        body["email"] = email;
        body["password"] = password;

        const req = new HttpRequest('POST', this.baseUrl + 'signin', body, {
            headers: new HttpHeaders().set('No-Auth', ''),
            responseType: 'json'
        });
        return this.http.request(req);
    }


}
