import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    url = env.apiUrl;
    constructor(private http: HttpClient){}
    getDashboardInfo(): any {
        return this.http.get(this.url + '/dashboard', {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        });
    }
}
