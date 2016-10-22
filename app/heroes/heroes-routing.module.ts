import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';
import {Hero1Component} from './hero1.component';
import {HerolistComponent} from './herolist.component';
import {HerodetailComponent} from './herodetail.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',  component: HerolistComponent },
      { path: 'detail', component: HerodetailComponent },
      { path: 'detail/:id', component: HerodetailComponent },
      
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }