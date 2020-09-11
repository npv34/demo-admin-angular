import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpResult} from "../core/http-result";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private authsService: AuthService) { }

  getAll(): Observable<any>{
    return this.http.get<HttpResult>(environment.url + '/users', this.authsService.getToken());
  }
}
