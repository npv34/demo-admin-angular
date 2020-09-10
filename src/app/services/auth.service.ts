import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users = [
    {
      id: 1,
      email: 'luan.phan@gmail.com',
      password: '123456'
    },
    {
      id: 2,
      email: 'quan.phan@gmail.com',
      password: '123456'
    },
    {
      id: 3,
      email: 'nam.phan@gmail.com',
      password: '123456'
    }
  ];
  constructor() { }

  findUser(data: any): boolean {

    for (let user of this.users){
      if (user.email == data.email && user.password == data.password){
          localStorage.setItem('userCurrent', JSON.stringify(user));
          return true;
      }
    }

    return false;
  }

  getUserLogin(){
    return JSON.parse(localStorage.getItem('userCurrent'));
  }
}
