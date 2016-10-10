import { Component } from '@angular/core';

import { ViewEncapsulation } from '@angular/core';

import { Location,LocationChangeEvent, LocationStrategy, HashLocationStrategy } from "@angular/common";
import 'rxjs/Rx';
import {Router} from '@angular/router';

 
@Component({
  selector: 'my-app',
   encapsulation: ViewEncapsulation.None,
   styleUrls:[],
  template: ` 

  <md-sidenav-layout>

  <md-sidenav #sidenav mode="side" class="app-sidenav" opened="false">
    <div class="sidenav-title">
      <h2>NyksBlog</h2>
    </div>
    <div class="sidenav-menu">
      <a routerLink="home" routerLinkActive="active"> Home </a>
    </div>
    <div class="sidenav-menu">
     <a routerLink="about" routerLinkActive="active">About</a>
    </div>
    <div class="sidenav-menu">
     <a routerLink="tech" routerLinkActive="active">Technology</a>
    </div>
    
  </md-sidenav>


  <md-toolbar color="accent" class="toolbar">
    <button class="app-icon-button" (click)="sidenav.toggle()">
      <i class="material-icons app-toolbar-menu">menu</i>
    </button>
 
    

  </md-toolbar>

  <div class="app-content container well">
              <div class="app-content" >
                      <router-outlet></router-outlet>
              </div>
</div>
</md-sidenav-layout>

`
})
export class AppComponent {
// events = [];
// 	constructor(private location: Location,private router:Router) {
// 		this.location.subscribe(ev => this.events.push(ev));

//     router.events.subscribe(event => {
//       //if (event instanceof NavigationStart) {
//         console.log('event', event)
//       //}
//     })
// 	}

  

}


