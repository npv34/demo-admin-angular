import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpResult} from "../../core/http-result";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    let data = this.loginForm.value;
    this.authService.login(data).subscribe((result: HttpResult) => {
      if (result.status == 'success') {
        let userLogin = result.data.user.original;
        localStorage.setItem('token', JSON.stringify(result.data.token));
        localStorage.setItem('currentUserLogin', JSON.stringify(userLogin));
        this.router.navigate(['admin'])
      }else {
        this.router.navigate(['login'])
      }
    });
  }
}
