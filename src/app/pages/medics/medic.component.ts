import { Component, OnInit } from '@angular/core';
import { MedicService, HospitalsService, ModalUploadService } from 'src/app/services/service.index';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Medic } from 'src/app/models/medic.model';
import { Hospital } from 'src/app/models/hospital.model';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',

})
export class MedicComponent implements OnInit {
  medic: Medic = new Medic('','','','');
  hospital: Hospital = new Hospital('');
 
  hospitals: Hospital[] = [];
  constructor(public _medicService: MedicService,
    public _hospitalService: HospitalsService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public _modalUploadService: ModalUploadService) {
    activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id !== 'new') {
        this.loadMedic(id);
      }
    })
  }

  ngOnInit() {
    this._hospitalService.loadHospitals()
      .subscribe((hospitals) => this.hospitals = hospitals);
    this._modalUploadService.notification
    .subscribe( resp => {
      this.medic.img = resp.medic.img;
    });
  }
  loadMedic(id: string) {
    this._medicService.loadMedic(id)
      .subscribe(medic => {
        this.medic = medic;
         this.medic.hospital = medic.hospital._id
        this.changeHospital( this.medic.hospital);
      })
  }

  saveMedic(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._medicService.saveMedic(this.medic)
      .subscribe((medic : any) => {
          this.medic._id = medic._id;
          this.router.navigate(['/medic', medic._id]); 
        return medic
      })

  }
  changeHospital(id: string) {
    this._hospitalService.getHospitals(id)
      .subscribe(hospital => this.hospitals = hospital)
  }
  changeImg() {
this._modalUploadService.showModal('medic', 'kdk')
  }
}
