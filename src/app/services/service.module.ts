import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SettingsService, 
          SidebarService, 
          SharedService, 
          UserService,
          LoadGuardGuard 
          } from './service.index';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,  ],
  providers: [SettingsService,
              SidebarService, 
              SharedService,
              UserService,
              LoadGuardGuard],
})
export class ServiceModule { }
