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
var shared_service_1 = require('../shared/shared.service');
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var router_2 = require('@angular/router');
var TechComponent = (function () {
    function TechComponent(us, route, router) {
        this.us = us;
        this.route = route;
        this.router = router;
    }
    TechComponent.prototype.click = function () {
        this.router.navigate(['angular2/5/6']);
    };
    TechComponent.prototype.gotoDotNet = function () {
        console.log('clicked');
        var navigationExtras = {
            queryParams: { 'session_id': 5 },
            fragment: 'anchor'
        };
        this.router.navigate(['/tech/tech/dotnet'], navigationExtras);
    };
    TechComponent = __decorate([
        core_1.Component({
            template: "<h6>Welcome: {{user}}\n   <br>\n   This is Technology Component \n   \n    <a (click)=\"click()\">Angualr2</a>\n    <a href=\"javascript:void(0)\" class=\"pointer\" (click)=\"gotoDotNet()\">DotNet</a>\n    <a class=\"pointer\" [routerLink]=\"['../../about']\">back</a>\n    <a class=\"pointer\" routerLink=\"dotnet\" fragment=\"anchor\">DotNet</a>\n    <router-outlet></router-outlet>\n    \n    "
        }), 
        __metadata('design:paramtypes', [shared_service_1.UserService, router_1.ActivatedRoute, router_2.Router])
    ], TechComponent);
    return TechComponent;
}());
exports.TechComponent = TechComponent;
//# sourceMappingURL=tech.component.js.map