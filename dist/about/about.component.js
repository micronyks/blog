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
var AboutComponent = (function () {
    function AboutComponent(us, router) {
        this.us = us;
        this.router = router;
        this.show = true;
    }
    AboutComponent.prototype.click = function () {
        var navigationExtras = {
            //queryParams: { 'session_id': sessionId },
            fragment: 'nyks'
        };
        console.log('redirected');
        //let link = ['/tech']; this.router.navigate(link);
        this.router.navigate(['/tech'], navigationExtras);
    };
    AboutComponent = __decorate([
        core_1.Component({
            template: "<h6>Welcome :{{user}}\n   This is About Component \n   {{about}} </h6>\n   <div *ngIf=\"show\">Nikhil Shah</div>\n   <button (click)=\"click()\">Click</button>\n  \n   "
        }), 
        __metadata('design:paramtypes', [shared_service_1.UserService, router_1.Router])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map