import{NgModule} from '@angular/core';
//import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';

import {routing} from './about.routing';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports:[SharedModule,routing],
  declarations:[AboutComponent],
  //exports:[AboutComponent],
  providers:[]
})

export default class AboutModule{}