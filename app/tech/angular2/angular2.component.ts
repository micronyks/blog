import {Component} from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import {Router,Params} from '@angular/router';

@Component({
   template:`<h6>
   <br>
   This isAngular2 Component 
  </h6>`
})

export class Angular2Component{
  constructor( private route: ActivatedRoute,
  private router: Router){
    
  }

  ngOnInit() {
  this.route.params.forEach((params: Params) => {
     console.log(params);
     let id = +params['id']; // (+) converts string 'id' to a number
     let number=+params['number'];
     console.log(id + " " + number);
   });
}
}