import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _URLSERVICES } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Medic } from 'src/app/models/medic.model';
import { Hospital } from 'src/app/models/hospital.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: User[] = [];
  medics: Medic[]=[];
  hospitals: Hospital[]=[];


  constructor( public activatedRoute : ActivatedRoute,
                public http: HttpClient) {
    activatedRoute.params
    .subscribe(params => {
      let value = params['value'];
      console.log(value);
      
    })
   }

  ngOnInit() {
  }

  search(value:string){
    let url = _URLSERVICES + '/search/all' + value;
    this.http.get(url)
    .subscribe((resp: any) => {
      console.log(resp);
      this.hospitals = resp.hospitals;
      this.medics = resp.medics;
      this.users = resp.users;
    })
  }
}
