import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { _URLSERVICES } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import swal from 'sweetalert';  


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserService;
  token:string;
  constructor(public http: HttpClient,
              public router: Router) {
    this.loadStorage();
  }

  isLogged(){
    return (this.token.length > 5)? true: false
  }
  loadStorage () {
    if( localStorage.getItem('token')){
      this.token= localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'))
    } else {
      this.token = "";
      this.user = null;
    }
  }

logout() {
  this.token ='';
  this.user = null;
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.router.navigate(['/login'])
}
  saveInStorage(id: string, token:string, user: UserService ){
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user',JSON.stringify(user));
    this.user = user;
    this.token = token;

  }
  loginGoogle(token: string) {
    let url = _URLSERVICES  + 'login/google';
    return this.http.post( url, { token}).pipe(map((resp: any)=>{
      this.saveInStorage(resp.id, resp.token, resp.user)
      return true;
    }))
  
  }

  login(user: User, remember: boolean = false ){
    if(remember) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }
    let url = _URLSERVICES + '/login';
    return this.http.post(url, user)
    .pipe(map((resp:any)=> {
      this.saveInStorage(resp.id, resp.token, resp.user)
      return true;
    }))
  }

  createUser(user: User) {
    let url = _URLSERVICES + '/usuario';
    return this.http.post(url, user)
    .pipe(map( (resp: any)=> {
      swal('Usuario creado', user.email, 'succes');
      return resp.user;
    }))
  }
}
