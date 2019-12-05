import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';


// Temporales 


import { BoosterComponent } from '../components/booster/booster.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        BoosterComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,

    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
    ]
})
export class PagesModule { }
