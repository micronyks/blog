import {NgModule} from '@angular/core';
import {TechComponent} from './tech.component';
import {DotNetComponent} from './dotnet/dotnet.component';
import {routing} from './tech.routing';
import {SharedModule} from '../shared/shared.module';
import {Angular2Component} from './angular2/angular2.component';
@NgModule({
  imports:[SharedModule,routing],
  declarations:[TechComponent,Angular2Component,DotNetComponent],
  providers:[]
})

export default class TechModule{}