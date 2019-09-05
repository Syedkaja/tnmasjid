import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { LocalStorage, WebstorableArray } from 'ngx-store';


import { environment } from '../../environments/environment';
@Injectable()
export class StudentsService {

    constructor(private http: HttpClient) { }
    baseUrl = environment.baseUrl;

    createStudent(studentObject): Observable<HttpEvent<{}>> {
        let body = studentObject;
        const req = new HttpRequest('POST', this.baseUrl + 'students', body, {
            headers: new HttpHeaders().set('No-Auth', ''),
            responseType: 'json'
        });        
        return this.http.request(req);
    }

    updateStudent(studentObject, currentobjectid): Observable<HttpEvent<{}>> {
        let body = studentObject;
        let id = currentobjectid;          
        const req = new HttpRequest('PUT', this.baseUrl + 'student/' + id, body, {
            headers: new HttpHeaders().set('No-Auth', ''),
            responseType: 'json'
        });        
        return this.http.request(req);
    }

    deleteStudent(currentobjectid):Observable<HttpEvent<{}>> {
        let id = currentobjectid;
        const req = new HttpRequest('DELETE', this.baseUrl + 'student/' + id,{
            headers: new HttpHeaders().set('No-Auth', ''),
            responseType: 'json'
        });
        return this.http.request(req);
    }

    
    getStudents(): Observable<HttpEvent<{}>> {
        const req = new HttpRequest('GET', this.baseUrl+'students', {
            headers: new HttpHeaders().set('No-Auth', ''),
            responeseType:'json'
        });    
        return this.http.request(req)
    }
}
