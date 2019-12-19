import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {
  public type: string;
  public id: string;
  public hidden: string = '';
  public notification = new EventEmitter <any>();
  constructor() { }

  hiddenModal(){
    this.hidden = 'hidden';
    this.type = null;
    this.type = null;
  }
  showModal(type: string, id: string){
    this.hidden = '';
    this.id = id;
    this.type = type;
  }

}
