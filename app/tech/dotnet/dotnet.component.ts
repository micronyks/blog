import {Component} from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import {Router,Params} from '@angular/router';

@Component({
   template:`<h2>
   <br>
   This Dotnet Component 
  </h2>
   <p>Dashboard</p>

    <p>Session ID: {{ sessionId | async }}</p><bR><br><br><bR><br><br><br><bR><bR><br><br><bR><br><br><br><bR>
<bR><br><br><bR><br><br><br><bR><bR><br><br><bR><br><br><br><bR><bR><br><br><bR><br><br><br><bR>   


 <div id="anchor">should come here</div>
    <p>Token: {{ token | async }}</p>
  
  
  
  `
})

export class DotNetComponent{
  sessionId: Observable<string>;
  token: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.route
      .queryParams
      .map(params => params['session_id'] || 'None');

    // Capture the fragment if available
    this.token = this.route
      .fragment
      .map(fragment => fragment || 'None');
  }
}