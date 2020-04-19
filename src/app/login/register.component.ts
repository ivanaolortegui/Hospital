import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import  swal from 'sweetalert';


//Servicios
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

declare function init_plugins();
declare var swal: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(public router: Router,
    public _userService: UserService) { }
  equal(camp1: string, camp2: string) {
    return (group: FormGroup) => {
      let pw1 = group.controls[camp1].value;
      let pw2 = group.controls[camp2].value;
      if (pw1 === pw2) {
        return null;
      }
      return {
        equal: true
      };
    }
  }

  ngOnInit() {
    init_plugins();
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condition: new FormControl(false)
    }, { validators: this.equal('password', 'password2') });
       this.form.setValue({
        name:'Ivana',
        email: 'ivana@gma',
        password: '123',
        password2:'123',
        condition: true
      }) 
  }

  registerUser() {
    if (this.form.invalid) {
      return;
    }
    if (!this.form.value.condition) {
      swal("Importante","Debe de aceptar las condiciones", "warning");
      return;
    }
    console.log(this.form.valid);
    let user = new User(
      this.form.value.name,
      this.form.value.email,
      this.form.value.password
    )
    console.log(user);
    
    this._userService.createUser(user).subscribe(resp => console.log(resp));

  }
}
