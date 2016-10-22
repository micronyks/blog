import {Component} from '@angular/core';


@Component({
   template:`<h6>Welcome :{{user}}
   This is About1 Component 
  
   `
})

export class About1Component{
  
  constructor(){
    console.log('about1 component');
  }
  
}