import {Component} from '@angular/core';

import {UserService} from '../shared/shared.service';
import {Router,NavigationExtras } from '@angular/router';
@Component({
   template:`<h6>Welcome :{{user}}
   This is About Component 
   {{about}} </h6>
   <div *ngIf="show">Nikhil Shah</div>
   <button (click)="click()">Click</button>  
  
   `
})

export class AboutComponent{
  show:boolean=true;
  constructor(private us:UserService,private router:Router){
  }
  click(){
    let navigationExtras: NavigationExtras = {
      //queryParams: { 'session_id': sessionId },
      fragment: 'nyks'
    };
    console.log('redirected');
    //let link = ['/tech']; this.router.navigate(link);
    
    this.router.navigate(['/tech'],navigationExtras);
  }
}