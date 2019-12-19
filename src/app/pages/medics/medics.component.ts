import { Component, OnInit } from '@angular/core';
import { MedicService } from 'src/app/services/service.index';

@Component({
  selector: 'app-medics',
  templateUrl: './medics.component.html',
  styleUrls: ['./medics.component.css']
})
export class MedicsComponent implements OnInit {

  medics: any[] = [];
  constructor( public _medicService: MedicService) { }

  ngOnInit() {
    this.loadMedics();
  }
  loadMedics(){
    this._medicService.loadMedics()
      .subscribe(medic => this.medics = medic);
  }

  searchMedic(value: string) {
    if( value.length <=0) {
      this.loadMedics();
    }
    this._medicService.searchMedics( value)
      .subscribe( medics => this.medics = medics);
    
  }
  updateMedic(medic){

  }
  deleteMedic(medic){
this._medicService.deleteMedic(medic._id)
.subscribe(()=> this.loadMedics())
  }
}
