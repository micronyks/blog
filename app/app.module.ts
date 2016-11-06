import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {SharedModule} from './shared/shared.module';
import {routing} from './app.routing';
import {HomeComponent} from './home/home.component';
import {ItemListComponent} from './home/item.component';
import { About1Component }        from './about/about1.component';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,SharedModule.forRoot(),routing,HttpModule],
  declarations: [ AppComponent,HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers:    []
})
export class AppModule { }

