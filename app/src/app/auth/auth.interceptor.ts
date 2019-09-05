import { Injectable, Injector } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpHandler, HttpRequest, HttpEvent, HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor{
    private authService: AuthService;

    constructor(private injector: Injector) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.has('No-Auth')){
            return next.handle(
                req.clone({
                    headers: req.headers.delete('NO-Auth')
                })
            )
        }else{
            this.authService = this.injector.get(AuthService);
            let token =  this.authService.getToken();
            if(token) {
                req = req.clone({
                    headers: req.headers.append('Authorization', 'Bearer' +token)
                });
            }
            return next.handle(req).do(
                () => {},
                (err: any) => {
                    if(err instanceof HttpErrorResponse){
                        if(err.status === 401){
                            this.authService.revokeAccess();
                        }
                    }
                }
            )
        }
    }
}