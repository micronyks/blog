import { Component,Injector} from '@angular/core';

import { ViewEncapsulation } from '@angular/core';
import {
  Input,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

import { Location,LocationChangeEvent, LocationStrategy, HashLocationStrategy } from "@angular/common";
import 'rxjs/Rx';
import {Router} from '@angular/router';
import {HomeComponent} from './home/home.component';
 
@Component({
  selector: 'my-app',
  // moduleId:module.id,
   encapsulation: ViewEncapsulation.None,
   styleUrls:[],
   templateUrl:'app/app.component.html',
 
})
export class AppComponent {
events = [];
	constructor(private location: Location,private router:Router) {
		this.location.subscribe(ev => this.events.push(ev));

    router.events.subscribe(event => {
      //if (event instanceof NavigationStart) {
        console.log('event', event.url)
      //}
    })
	}

}


