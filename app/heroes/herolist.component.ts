import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Hero, HeroService }  from './hero.service';
@Component({
   template:`
   <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
   <a (click)="navigate()">Detail</a>

   <router-outlet name="namedOutlet"></router-outlet>
   `,
   styleUrls:['app/heroes/heroes.css']
})

export class HerolistComponent{
  
  
  

  heroes: Hero[];
  private selectedId: number;
  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        this.selectedId = +params['id'];
        this.service.getHeroes()
          .then(heroes => this.heroes = heroes);
      });
  }
  isSelected(hero: Hero) { return hero.id === this.selectedId; }
  onSelect(hero: Hero) {
   console.log('You just clicked me!');
    //let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    console.log(hero.id);
    this.router.navigate(['heroes/detail',hero.id]);
  }

  navigate(){
    this.router.navigate(['heroes/detail',{id:5}]);
  }

  
}