import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {
        if (this.authService.isAuthenticated()) {
            this.authService.grantAccess();
            return true;
        }
        this.authService.revokeAccess();
        return false;
    }

    canActivateChild() {
        if (this.authService.isAuthenticated()) {
            this.authService.grantAccess();
            return true;
        }
        this.authService.revokeAccess();
        return false;
    }

}
