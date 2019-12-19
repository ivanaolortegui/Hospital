import { Component, OnInit } from '@angular/core';
import { HospitalsService, ModalUploadService } from 'src/app/services/service.index';


declare var swal: any;

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  hospitals: any[] = [];
  constructor(public _hospitalService: HospitalsService,
    public _modalUploadService : ModalUploadService ) { }

  ngOnInit() {
    this.loadHospitals();
    this._modalUploadService.notification
    .subscribe(()=> this.loadHospitals());
  }
  searchHospital(value) {
    if (value.length <= 0) {
      this.loadHospitals();
      return;
    }
    this._hospitalService.searchHospital(value)
    .subscribe(hospitals=> this.hospitals = hospitals );
  }
  loadHospitals() {
    this._hospitalService.loadHospitals()
      .subscribe(hospitals => this.hospitals = hospitals);
  }
  saveHospital(hospital) {
    this._hospitalService.updateHospital(hospital)
    .subscribe(()=> this.loadHospitals);
  }
  deleteHospital(hospital) {
    this._hospitalService.deleteHospital( hospital._id)
    .subscribe( ()=> this.loadHospitals());
  }
  createHospital() {
    swal({
      title: 'Crear hospital',
      text: "Ingrese el nombre del hospital",
      content: 'input',
      icon:'info',
      button: true,
      dangerModel: true
    }).then((value: string) => {
      if (!value || value.length === 0) {
        return ;
      }
     this._hospitalService.createHospital(value)
     .subscribe(()=> {
       this.loadHospitals();
     })  
    });
  }

  updateImage(hospital){
    this._modalUploadService.showModal('hospitales', hospital._id)
  }
}
