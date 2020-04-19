import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/service.index';
import { User } from '../../models/user.model';
import { _URLSERVICES } from '../../config/config';
import swal from 'sweetalert';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user : User
uploadImg: File;
temporaryImage : string | ArrayBuffer;
  constructor(
    public _UserService: UserService
  ) { this.user = _UserService.user;}
  
  ngOnInit() {
  }
  save( user: User) {
    this.user.nombre = user.nombre;
    if(!user.google){
      this.user.email = user.email;
    }
    this._UserService.updateUser(this.user)
    .subscribe()
  }

  chooseImage(file:File){
    if(!file){
      this.uploadImg = null;
      return;
    }

    if(file.type.indexOf('image') < 0){
      swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.uploadImg = null;
      return;
    }
    this.uploadImg = file;
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(file);
  
    reader.onloadend = () => this.temporaryImage = reader.result
      
    
  }
  changeImg(){
    this._UserService.changeImg( this.uploadImg, this.user._id);
  }
}
