# Observable
 ## What is observable?
<ul>
<li>
  An array whose items arrive asynchronously over time. Observables help you manage asynchronous data, such as data coming from a backend service. Observables are used within Angular itself, including Angular's event system and its HTTP client service.
</li>
<li>
  To use observables, Angular uses a third-party library called <b>Reactive Extensions (RxJS)</b>. Observables are a proposed feature for ES2016, the next version of JavaScript.
</li>
<li>
  Observables open up a continuous channel of communication in which multiple values of data can be emitted over time. 
  From this we get a pattern of dealing with data by using array-like operations to parse, modify and maintain data. 
  Angular uses observables extensively - you'll see them in the HTTP service and the event system.
 </li>
 <br>
 <b><i>In simple words,</i></b>
 
 <li>
    Observables are lazy collections of multiple values over time. let's understand it correctly.
 </li>
 
>
        
      let obs = new Rx.Observable.interval(1000);
    
      obs.subscribe(x => console.log(x));

>
      
OUTPUT : 0 1 2 3 4 5...

Here <b>obs</b> is an observable defined with <b>Rx.Observable</b> which emits interger value after 1 second of interval.

 
 ## 1. Cold vs Hot Observables
 
<li>
 observables can be classified into two main groups: hot and cold Observables. 
 <br><i>Let's start with a cold Observable.</i>
</li>



### Cold Observable:
 <bR>It means, after creating an observable if you don't subscribe to observable, it will never emit the data.
 
> 
        // Create an observable
        const ColdObservable = new Rx.Observable(observer => {
          setTimeout(() => {
            observer.next(1);
          }, 1000);
        });

        // Subscription A
        setTimeout(() => {
          //commenting out the subscription of the ColdObservable

          //ColdObservable.subscribe(value => console.log(value));

            console.log('ColdObservable is not subscribed');

        }, 0);
        
>       

<b>OUTPUT</b> : "ColdObservable is not subscribed"

<hr>

### Hot Observable:
 <bR>It means, after creating an observable if you do subscribe to observable, it will start emitting the data.
 
>

        // Create an observable
        const HotObservable = new Rx.Observable(observer => {
          setTimeout(() => {
            observer.next(1);
          }, 1000);
        });

        // Subscription B
        setTimeout(() => {

          console.log('HotObservable is subscribed');

          //Subscribing to HotObservable

          HotObservable.subscribe(value => console.log(`${value}`));

        }, 0);
        
>
        
 <b>OUTPUT</b> : "HotObservable is subscribed"
 <br/><br/>
                  "1"


### There are hundred of operators associated with Rxjs which can be found here https://github.com/ReactiveX/rxjs/blob/master/doc/operators.md

<hr>

Let's say we wanted to implement an <code>AJAX search</code> feature in which <code>every keypress</code> in a text field will 
automatically perform a search and update the page with the results. <br>How would this look? <br>
Well we would have an Observable subscribed to events coming from an input field, 
and on every change of input we want to perform some <code>HTTP request</code>, 
which is also an Observable we subscribe to. What we end up with is an Observable of an Observable.
By using <code>flatMap</code> we can transform our event stream (the keypress events on the text field) 
into our response stream (the search results from the HTTP request).


>
<b>app/services/search.service.ts</b>


          import {Http} from '@angular/http';
          import {Injectable} from '@angular/core';

          @Injectable()
          export class SearchService {

            constructor(private http: Http) {}

            search(term: string) {
              return this.http
                      .get('https://api.spotify.com/v1/search?q=' + term + '&type=artist')
                      .map((response) => response.json())
            }
          }

>


Here we have a basic service that will undergo a search query to Spotify by performing a get 
request with a supplied search term. This <code>search</code> function returns an <code>Observable</code> that has had some basic post-processing done 
(turning the response into a JSON object).


OK, let's take a look at the <code>component</code> that will be using this service.

<b>app/app.component.ts</b>

>

        import { Component } from '@angular/core';
        import { FormControl,
            FormGroup,
            FormBuilder } from '@angular/forms';
        import { SearchService } from './services/search.service';
        import 'rxjs/Rx';

        @Component({
            selector: 'app-root',
            template: `
                <form [formGroup]="coolForm"><input formControlName="search" placeholder="Search Spotify artist"></form>

                <div *ngFor="let artist of result">
                  {{artist.name}}
                </div>
            `
        })

        export class AppComponent {
            searchField: FormControl;
            coolForm: FormGroup;

            constructor(private searchService:SearchService, private fb:FormBuilder) {
                this.searchField = new FormControl();
                this.coolForm = fb.group({search: this.searchField});

                this.searchField.valueChanges
                  .debounceTime(400)
                    .flatMap(term => this.searchService.search(term))
                    .subscribe((result) => {
                        this.result = result.artists.items
                    });
            }
        }

>

Here we have set up a basic form with a single field, <code>search</code>, which we subscribe to for event changes. 
We've also set up a simple binding for any results coming from the <code>SearchService</code>. 
The real magic here is <code>flatMap</code> which allows us to flatten our two separate subscribed <code>Observables</code> 
into a single cohesive stream we can use to control events coming from user input and from server responses.
Note that <code>flatMap</code> flattens a stream of </code>Observables</code> (i.e <code>Observable</code> of <code>Observables</code>) 
to a stream of emitted values (a simple Observable), by emitting on the "trunk" stream everything that will be
emitted on "branch" streams.
