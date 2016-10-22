import {Component} from '@angular/core';

import {UserService} from '../shared/shared.service';
import {Router,NavigationExtras } from '@angular/router';
@Component({
   template:`

  <md-card>
   <md-card-subtitle>Contact Us</md-card-subtitle>
   <md-card-title>Nikhil Shah</md-card-title>   
   <md-card-content>
        <p>gmail : nikhilshahlive@gmail.com</p>
        <p>Skype : nikhilshahlive</p>
        <p>(M)   : 09033004579</p>
   </md-card-content>
  </md-card>
   
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