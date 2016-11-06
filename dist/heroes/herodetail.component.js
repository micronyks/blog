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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var HerodetailComponent = (function () {
    function HerodetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        console.log('running');
    }
    Object.defineProperty(HerodetailComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HerodetailComponent.prototype, "display", {
        get: function () {
            return 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HerodetailComponent.prototype, "position", {
        get: function () {
            return 'absolute';
        },
        enumerable: true,
        configurable: true
    });
    HerodetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('exe');
        this.route.params.forEach(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.service.getHero(id).then(function (hero) { return _this.hero = hero; });
        });
    };
    HerodetailComponent.prototype.gotoHeroes = function () {
        console.log('You just clicked me!');
        var heroId = this.hero ? this.hero.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        console.log(heroId);
        this.router.navigate(['./heroes']);
    };
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], HerodetailComponent.prototype, "routeAnimation", null);
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', Object)
    ], HerodetailComponent.prototype, "display", null);
    __decorate([
        core_1.HostBinding('style.position'), 
        __metadata('design:type', Object)
    ], HerodetailComponent.prototype, "position", null);
    HerodetailComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>HEROES</h2>\n  <div *ngIf=\"hero\">\n    <h3>\"{{hero.name}}\"</h3>\n    <div>\n      <label>Id: </label>{{hero.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n    </div>\n    <p>\n      <button (click)=\"gotoHeroes()\">Back</button>\n    </p>\n  </div>\n\n  {{hero|json}}\n   ",
            animations: [
                core_1.trigger('routeAnimation', [
                    core_1.state('*', core_1.style({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    core_1.transition('void => *', [
                        core_1.style({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('2s ease-in')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('2s ease-out', core_1.style({
                            opacity: 1,
                            transform: 'translateY(100%)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, hero_service_1.HeroService])
    ], HerodetailComponent);
    return HerodetailComponent;
}());
exports.HerodetailComponent = HerodetailComponent;
//# sourceMappingURL=herodetail.component.js.map