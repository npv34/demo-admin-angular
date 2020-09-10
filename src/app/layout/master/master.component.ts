import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  currentUserLogin;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUserLogin = this.authService.getUserLogin();
  }

}
