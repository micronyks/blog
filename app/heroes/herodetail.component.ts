
import { Router, ActivatedRoute, Params } from '@angular/router'; 
import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
         import { Hero, HeroService }  from './hero.service';
@Component({
   template:`
    <h2>HEROES</h2>
  <div *ngIf="hero">
    <h3>"{{hero.name}}"</h3>
    <div>
      <label>Id: </label>{{hero.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoHeroes()">Back</button>
    </p>
  </div>

  {{hero|json}}
   `,
    animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('2s ease-in')
      ]),
      transition('* => void', [
        animate('2s ease-out', style({
          opacity: 1,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})

export class HerodetailComponent{
  
 @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  @HostBinding('style.display') get display() {
    return 'block';
  }
  @HostBinding('style.position') get position() {
    return 'absolute';
  }
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService) {console.log('running')}
  ngOnInit() {
    console.log('exe');
    this.route.params.forEach((params: Params) => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.service.getHero(id).then(hero => this.hero = hero);
     });
  }
  gotoHeroes() {

  console.log('You just clicked me!');
    let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    console.log(heroId);
    this.router.navigate(['./heroes']);
  }
  
}