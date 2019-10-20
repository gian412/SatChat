import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { DashboardModule } from './dashboard/dashboard.module';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TablesComponent } from './tables/tables.component';
import { FormComponent } from './form/form.component';
import { ChartsComponent } from './charts/charts.component';
import { ChatfunctionComponent } from './chatfunction/chatfunction.component';
import { SatchatmainComponent} from './satchatmain/satchatmain.component';
import { MaindescriptionComponent } from './maindescription/maindescription.component';
import { WhatiseeComponent } from './whatisee/whatisee.component';
import { VideolistComponent } from './videolist/videolist.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        NgbCarouselModule,
        NgbAlertModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, DashboardComponent, TablesComponent, FormComponent, ChartsComponent, ChatfunctionComponent, SatchatmainComponent, MaindescriptionComponent, WhatiseeComponent, VideolistComponent]
})
export class LayoutModule {}
