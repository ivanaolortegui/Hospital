import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _URLSERVICES } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import swal from 'sweetalert';
import { Medic } from 'src/app/models/medic.model';

@Injectable({
  providedIn: 'root'
})
export class MedicService {
totalMedics: number = 0;
  constructor(public http: HttpClient,
    public _userService : UserService) { }
  
  loadMedics(){
    let url = _URLSERVICES + '/medic';
    return this.http.get(url)
    .pipe(map(( resp: any)=> {
      this.totalMedics = resp.total;
      return resp.medics;
    }))
  }
  loadMedic(id: string){
    let url = _URLSERVICES + '/medic' + id;
    return this.http.get(url)
    .pipe(map(( resp: any)=> {  
      return resp.medic;
    }))
  }
  searchMedics(value: string) {
    let url = _URLSERVICES + '/search/colection/medics/' + value;
    return this.http.get(url)
      .pipe(map((resp: any) => resp.users));
  }
  deleteMedic(id: string) {
    let url = _URLSERVICES + '/user/' + id;
    url += '?token=' + this._userService.token;
    return this.http.delete(url)
      .pipe(map(resp => {
        swal('Médico borrado', 'El médico ha sido eliminado correctamente', 'succes');
        return true;
      }));
  }

  saveMedic(medic: Medic) {
    let url = _URLSERVICES + '/medic';
    if(medic._id){
      url +='/'+ medic._id;
      url+= '?token=' + this._userService.token;
      return this.http.put(url, medic)
      .pipe(map((resp:any) => {
        swal('Médico Actualizado', medic.name, 'succes');
        resp.hospital}));
    
    } else {
      url += '?token=' + this._userService.token;
      return this.http.post(url, medic )
      .pipe(map((resp:any) => {
        swal('Médico creado', medic.name, 'succes');
        resp.hospital}));
    }
 
  }
}
