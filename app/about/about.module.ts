import{NgModule} from '@angular/core';
//import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {About1Component} from './about1.component';
import {routing} from './about.routing';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports:[SharedModule,routing],
  declarations:[AboutComponent,About1Component],
  //exports:[AboutComponent],
  providers:[]
})

export default class AboutModule{}