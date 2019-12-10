import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) {
    console.log('list');
  }

  createUser(user: User) {

  }
}
