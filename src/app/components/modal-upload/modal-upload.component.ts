import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { UserService } from 'src/app/services/service.index';
import { ModalUploadService } from '../../services/modal-upload/modal-upload.service';
import { UploadFileService } from '../../services/file/upload-file.service'

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {
 
  uploadImg: File;
  temporaryImage: string | ArrayBuffer;
  constructor(
    public _UserService: UserService,
    public _ModalUploadService : ModalUploadService,
    public _UpladeService : UploadFileService
  ) {}
  
  ngOnInit() {
  }

  chooseImage(file: File) {
    if (!file) {
      this.uploadImg = null;
      return;
    }

    if (file.type.indexOf('image') < 0) {
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
   this._UpladeService.uploadFile( this.uploadImg, this._ModalUploadService.type, this._ModalUploadService.id)
   .then( resp => {
     this._ModalUploadService.notification.emit(resp );
     this.closeModal();
   });
  }
  closeModal(){   
    this.temporaryImage = null;
    this.uploadImg = null;
    this._ModalUploadService.hiddenModal();
  }

}
