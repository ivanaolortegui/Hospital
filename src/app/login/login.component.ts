import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  remember: boolean = false;
  auth2: any;

  constructor(public router: Router,
    public _userService: UserService) { }

  ngOnInit() {
    init_plugins();
    this.googleInit()
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.remember = true;
    }
  }
  googleInit() {
    gapi.onload('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '12254545',
        cookiepolicy: 'single_hos_otogin',
        scope: 'profile'
      });
      this.attachSignin(document.getElementById('btn-google'));
    })

  }

  attachSignin(element) {
    this.auth2.attachSignin(element, {}, (googleUser) => {
      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;
      this._userService.loginGoogle(token)
        .subscribe((resp) =>  window.location.href = '#/dashboard')
    })
  }
  login(form: NgForm) {
    if (form.valid) {
      return;
    }
    let user = new User(null, form.value.email, form.value.password);
    console.log(form);
    /*   this._userService.login(user, form.value.remember).subscribe( resp=> {
        this.router.navigate(['/dashboard'])
      }) */
    // this.router.navigate(['/dashboard']);
    init_plugins()
  }
}
