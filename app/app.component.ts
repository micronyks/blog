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
      <h2>Company</h2>
    </div>
    <div class="sidenav-menu">
      Sidenav Menu
    </div>
    
  </md-sidenav>

  <md-toolbar color="primary" class="toolbar">
    <button class="app-icon-button" (click)="sidenav.toggle()">
      <i class="material-icons app-toolbar-menu">menu</i>
    </button>
 
    

  </md-toolbar>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">NyksBlog</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li> <a routerLink="about" routerLinkActive="active">About</a></li>
        <li><a routerLink="tech" routerLinkActive="active">Technology</a></li>
      </ul>
     
      
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
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


