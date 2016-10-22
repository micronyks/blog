import {Directive,HostListener} from '@angular/core';

@Directive({
  selector: '[modalOpen]',
  host:{
      '(click)':"click()"
  }
})

export class ModalOpenDirective {

  

  constructor() {}

 click()
 {
     console.log('you just clicked me!');
 }
}