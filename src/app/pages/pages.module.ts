import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//module routing
import { RoutingModule } from './routing.module';

//module
import { SharedModule } from '../shared/shared.module';

//pages
import { HomeComponent } from './home/home.component';
import { DatailsComponent } from './datails/datails.component';




@NgModule({
  declarations: [
    HomeComponent,
    DatailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
