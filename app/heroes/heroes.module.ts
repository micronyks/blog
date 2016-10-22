import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroService } from './hero.service';
import { HeroRoutingModule } from './heroes-routing.module';

import {HerolistComponent} from './herolist.component';
import {HerodetailComponent} from './herodetail.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [
    HerolistComponent,
    HerodetailComponent
  ],
  providers: [
    HeroService
  ]
})
export default class HeroesModule {}