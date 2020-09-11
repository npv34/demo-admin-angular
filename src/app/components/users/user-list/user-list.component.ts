import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";
import {HttpResult} from "../../../core/http-result";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((result: HttpResult) => {
      if (result.status == 'success') {
        console.log(result.data)
        this.users = result.data;
      }
    })
  }

}
