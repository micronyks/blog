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
var TechnologyComponent = (function () {
    function TechnologyComponent(us, route) {
        this.us = us;
        this.route = route;
    }
    TechnologyComponent.prototype.ngOnInit = function () {
        // Capture the fragment if available
        this.token = this.route
            .fragment
            .map(function (fragment) { return fragment || 'None'; });
    };
    TechnologyComponent = __decorate([
        core_1.Component({
            template: "<h6>Welcome: {{user}}\n   <br>\n   This is Technology Component \n    {{tech}}</h6>\n    <bR>\n    \n    <a routerLink=\"angular2\" routerLinkActive=\"active\">Angualr2</a>\n    <a class=\"pointer\" [routerLink]=\"['../../about']\">Back</a>\n    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n    <a id=\"nyks\">Nyks</a>\n    <p>Token: {{ token | async }}</p>\n    <router-outlet></router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [shared_service_1.UserService, router_1.ActivatedRoute])
    ], TechnologyComponent);
    return TechnologyComponent;
}());
exports.TechnologyComponent = TechnologyComponent;
//# sourceMappingURL=technology.component.js.map