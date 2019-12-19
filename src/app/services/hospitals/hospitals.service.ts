import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { _URLSERVICES } from 'src/app/config/config';
import { UserService } from '../user/user.service';


import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  totalHospitals: number = 0;
  constructor(public http: HttpClient,
    public _userService: UserService) { }

  loadHospitals() {
    let url = _URLSERVICES + '/hospital';
    return this.http.get(url)
      .pipe(map((resp: any) => {
        this.totalHospitals = resp.total;
        return resp.hospital;
      }));
  }


  getHospitals(id: string) {
    let url = _URLSERVICES + '/hospital/' + id;
    return this.http.get(url)
      .pipe(map((resp: any) => resp.hospital))
  }

  deleteHospital(id: string) {
    let url = _URLSERVICES + '/hospital/' + id;
    url += '?token=' + this._userService.token;
    return this.http.delete(url)
      .pipe(map(resp => {
        swal('Hospital borrado', 'El Hospital ha sido eliminado correctamente', 'succes');
        return true;
      }));
  }


  createHospital(name: string) {
    let url = _URLSERVICES + '/hospital';
    url += '?token=' + this._userService.token;
    return this.http.post(url, { name})
    .pipe(map((resp:any) => resp.hospital));
  }
  searchHospital(value: string) {
    let url = _URLSERVICES + '/search/colection/hospitals/' + value;
    return this.http.get(url)
      .pipe(map((resp: any) => resp.hospital));
  }
  updateHospital(hospital) {
    let url = _URLSERVICES + '/hospital' + hospital._id;
    url += '?token=' +  this._userService.token;
    return this.http.put(url, hospital)
      .pipe(map((resp: any) => {
        swal('Hospital Actualizado', hospital.name, 'succes');
        return resp.hospital;
      }));
  }

}
