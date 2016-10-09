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
var router_2 = require('@angular/router');
var Angular2Component = (function () {
    function Angular2Component(route, router) {
        this.route = route;
        this.router = router;
    }
    Angular2Component.prototype.ngOnInit = function () {
        this.route.params.forEach(function (params) {
            console.log(params);
            var id = +params['id']; // (+) converts string 'id' to a number
            var number = +params['number'];
            console.log(id + " " + number);
        });
    };
    Angular2Component = __decorate([
        core_1.Component({
            template: "<h6>\n   <br>\n   This isAngular2 Component \n  </h6>"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_2.Router])
    ], Angular2Component);
    return Angular2Component;
}());
exports.Angular2Component = Angular2Component;
//# sourceMappingURL=angular2.component.js.map