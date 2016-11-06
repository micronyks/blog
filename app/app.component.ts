import { Component,Injector} from '@angular/core';
import {Http} from '@angular/http';
import { ViewEncapsulation } from '@angular/core';
import {UserService} from './shared/shared.service';
import 'rxjs/Rx';
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
myObj:any;
	constructor(private location: Location,private router:Router,private http:Http,private ss:UserService) {
		this.location.subscribe(ev => this.events.push(ev));

    router.events.subscribe(event => {
      //if (event instanceof NavigationStart) {
        console.log('event', event.url)
      //}
    })
	}

  ngOnInit()
  {
    this.getStudents();
    console.log('App ngOnInit');
  }

  getStudents()
  {
    this.myObj=this.ss.GetStudents().subscribe(t=>{console.log(this.myObj=t)});
    
    console.log('here');
  }

}


