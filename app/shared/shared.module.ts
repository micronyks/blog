import { NgModule,
         ModuleWithProviders } from '@angular/core';
import { CommonModule }        from '@angular/common';
import { UserService }         from './shared.service';
import {MaterialModule} from '../materialdesign/material.module';


@NgModule({
  imports:      [ CommonModule,MaterialModule.forRoot() ],
  declarations: [],
  exports:      [ CommonModule,MaterialModule],
  //providers:[UserService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ UserService ]
    };
  }
}