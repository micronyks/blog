import { Component } from '@angular/core';
import {UserService} from '../shared/shared.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'home',
  template: `
     <h5>Welcome to Nyks Blog </h5>
  `
})
export class HomeComponent { 
  constructor(private s:UserService,private router:Router,private route:ActivatedRoute){
    s.getJson();
  }


 
}