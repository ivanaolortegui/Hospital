import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      title:'Principal',
      icon:'mdi mdi-gauge',
      submenu: [
        {title: 'Dashboard', url:'/dashboard'},
        {title: 'Progress', url:'/Progress'},
        {title: 'Graficas', url:'/Graficas1'}
      ]
    }
  ]
  constructor() { }
}
