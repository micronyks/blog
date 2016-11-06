"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var HerolistComponent = (function () {
    function HerolistComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    HerolistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.selectedId = +params['id'];
            _this.service.getHeroes()
                .then(function (heroes) { return _this.heroes = heroes; });
        });
    };
    HerolistComponent.prototype.isSelected = function (hero) { return hero.id === this.selectedId; };
    HerolistComponent.prototype.onSelect = function (hero) {
        console.log('You just clicked me!');
        //let heroId = this.hero ? this.hero.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        console.log(hero.id);
        this.router.navigate(['heroes/detail', hero.id]);
    };
    HerolistComponent.prototype.navigate = function () {
        this.router.navigate(['heroes/detail', { id: 5 }]);
    };
    HerolistComponent = __decorate([
        core_1.Component({
            template: "\n   <h2>HEROES</h2>\n    <ul class=\"items\">\n      <li *ngFor=\"let hero of heroes\" \n        [class.selected]=\"isSelected(hero)\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n   <a (click)=\"navigate()\">Detail</a>\n\n   \n   ",
            styleUrls: ['app/heroes/heroes.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, router_1.Router])
    ], HerolistComponent);
    return HerolistComponent;
}());
exports.HerolistComponent = HerolistComponent;
//# sourceMappingURL=herolist.component.js.map