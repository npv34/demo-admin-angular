import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpResult} from "../core/http-result";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {
  }

  login(data): Observable<HttpResult> {
    return this.http.post<HttpResult>(environment.url + '/login', data);
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'))
  }

  getUserLogin() {
    return JSON.parse(localStorage.getItem('currentUserLogin'))
  }
}
