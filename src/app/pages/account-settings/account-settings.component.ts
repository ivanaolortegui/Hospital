import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _settings: SettingsService) {  
  }

  ngOnInit() {
    this.applyCheck2()
  }
  changeColor(theme: string, link: any) {
    this.applyCheck(link);
    this._settings.aplyTheme(theme);

  }
  applyCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores) {
      ref.classList.remove('working')
    }
    link.classList.add('working');
    
  }
  applyCheck2() {
    let selectores: any = document.getElementsByClassName('selector');
    let theme = this._settings.settings.theme;
    for (let ref of selectores) {
      if (ref.getAttribute('data-theme') === theme){
        ref.classList.add('working');
        break;
      }
 
    }
  }
}
