import {Component} from '@angular/core';

import {UserService} from '../shared/shared.service';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras
}                           from '@angular/router';

@Component({
   template:`<h6>Welcome: {{user}}
   <br>
   This is Technology Component 
   
    <a (click)="click()">Angualr2</a>
    <a href="javascript:void(0)" class="pointer" (click)="gotoDotNet()">DotNet</a>
    <a class="pointer" [routerLink]="['../../about']">back</a>
    <a class="pointer" routerLink="dotnet" fragment="anchor">DotNet</a>
    <router-outlet></router-outlet>
    
    `
})

export class TechComponent{
  token: Observable<string>;

  constructor(private us:UserService,private route: ActivatedRoute,private router:Router){
  }
   

  click(){
    this.router.navigate(['angular2/5/6']);
  }

  gotoDotNet()
  {
    console.log('clicked');
     let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': 5 },
      fragment: 'anchor'
    };

    this.router.navigate(['/tech/tech/dotnet'], navigationExtras);
  }
}