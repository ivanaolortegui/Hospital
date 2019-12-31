import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import {
  SettingsService,
  SidebarService,
  SharedService,
  UserService,
  LoadGuardGuard,
  UploadFileService,
  HospitalsService,
  ModalUploadService,
  MedicService,
  AdminGuard,
  VerifyTokenGuard 
} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,],
  providers: [SettingsService,
    SidebarService,
    SharedService,
    UserService,
    UploadFileService,
    LoadGuardGuard,
    AdminGuard,
    VerifyTokenGuard,
    ModalUploadService,
    HospitalsService,
    MedicService],
})
export class ServiceModule { }
