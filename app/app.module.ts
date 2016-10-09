import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {SharedModule} from './shared/shared.module';
import {routing} from './app.routing';
import {HomeComponent} from './home/home.component';
import {ItemListComponent} from './home/item.component';


@NgModule({
  imports:      [ BrowserModule,SharedModule.forRoot(),routing],
  declarations: [ AppComponent,HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers:[
    
  ]
})
export class AppModule { }

