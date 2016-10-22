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
// TODO SOMEDAY: Feature Componetized like CrisisCenter
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Hero1Component = (function () {
    function Hero1Component(route, router) {
        this.route = route;
        this.router = router;
    }
    Hero1Component.prototype.ngOnInit = function () {
    };
    Hero1Component = __decorate([
        core_1.Component({
            template: "\n    Hero1 Component\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], Hero1Component);
    return Hero1Component;
}());
exports.Hero1Component = Hero1Component;
//# sourceMappingURL=hero1.component.js.map