import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';

import { LoadGuardGuard, AdminGuard, VerifyTokenGuard } from '../services/service.index';
import { UsersComponent } from './users/users.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { MedicsComponent } from './medics/medics.component';
import { MedicComponent } from './medics/medic.component';
import { SearchComponent } from './search/search.component';




const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoadGuardGuard],
    children: [
      { 
        path: 'dashboard', 
        component: DashboardComponent, 
        canActivate:[VerifyTokenGuard],
        data : {title: 'dashboard'}
      },
      { path: 'progress', component: ProgressComponent, data : {title: 'progress'}},
      { path: 'graficas1', component: Graphics1Component, data : {title: 'gráficas'} },
      { path: 'promesa', component: PromiseComponent, data : {title: 'promesa'}},
      { path: 'rxjs', component: RxjsComponent, data : {title: 'Rxjs'}},
      { path: 'account-settings', component: AccountSettingsComponent, data : {title: 'Ajustes  del Tema'}},
      { path: 'perfil', component: ProfileComponent, data : {title: 'Perfil del usuario'}}, 
      { path: 'search/:value', component: SearchComponent, data : {title: 'Buscador'}},
      // Mantenimientos
      { 
        path: 'users', 
        component: UsersComponent, 
        canActivate: [AdminGuard],
        data : {title: 'Mantenimieto de Usuarios'}
      },
      { path: 'hospitals', component: HospitalsComponent, data : {title: 'Mantenimieto de Hospitales'}},
      { path: 'medics', component: MedicsComponent, data : {title: 'Mantenimieto de Médicos'}},
      { path: 'medic/:id', component: MedicComponent, data : {title: 'Mantenimieto de Médico'}},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
