import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';

import { SettingsService, 
          SidebarService, 
          SharedService, 
          UserService,
          LoadGuardGuard,
          UploadFileService,
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
              UploadFileService,
              LoadGuardGuard,
              ModalUploadComponent],
})
export class ServiceModule { }
