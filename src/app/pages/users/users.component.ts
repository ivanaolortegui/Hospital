import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';

import { UserService } from 'src/app/services/service.index';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

/* import swal from 'sweetalert';
*/
declare var swal: any

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  from: number = 0;
  load: boolean = false;
  totalRegisters: number = 0;

  constructor(
    public _UserService: UserService,
    public _modalUploadService: ModalUploadService
    ) { }

  ngOnInit() {
    this.loadUsers();
    this._modalUploadService.notification
    .subscribe( resp => this.loadUsers());
  }

  showModal(id : string){
    this._modalUploadService.showModal('user', id);
  }

  loadUsers() {
    this._UserService.loadUsers(this.from)
      .subscribe((resp: any) => {
        this.totalRegisters = resp.total;
        this.users = resp.users;
        this.load = false;
      })
  }
  changeFrom(value: number) {
    let from = this.from + value;
    if (from >= this.totalRegisters) {
      return;
    }
    if (from < 0) {
      return;
    }
    this.from += value;
    this.loadUsers();
  }

  searchUser(value: string) {
    if (value.length <= 0) {
      this.loadUsers();
      return;
    }
    this.load = true;
    this._UserService.searchUsers(value)
      .subscribe((users: User[]) => {
        this.users = users;
        this.load = false;
      });
  }

  deleteUser(user: User) {
    if (user._id === this._UserService.user._id) {
      swal('No puede borrar', 'No se puede borrar a si mismo', 'error')
      return;
    }
    swal({
      title: '¿Esta seguro',
      text: 'Esta a punto de borrar a' + user.name,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then(action => {
        if (action) {
          this._UserService.deleteUser(user._id)
          .subscribe( resp => {
               this.loadUsers();
          });
        }
      })
  }

  saveUser(user: User){
    this._UserService.updateUser(user)
    .subscribe();
  }
}
