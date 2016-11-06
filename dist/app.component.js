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
var http_1 = require('@angular/http');
var core_2 = require('@angular/core');
var shared_service_1 = require('./shared/shared.service');
require('rxjs/Rx');
var common_1 = require("@angular/common");
require('rxjs/Rx');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(location, router, http, ss) {
        var _this = this;
        this.location = location;
        this.router = router;
        this.http = http;
        this.ss = ss;
        this.events = [];
        this.location.subscribe(function (ev) { return _this.events.push(ev); });
        router.events.subscribe(function (event) {
            //if (event instanceof NavigationStart) {
            console.log('event', event.url);
            //}
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getStudents();
        console.log('App ngOnInit');
    };
    AppComponent.prototype.getStudents = function () {
        var _this = this;
        this.myObj = this.ss.GetStudents().subscribe(function (t) { console.log(_this.myObj = t); });
        console.log('here');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // moduleId:module.id,
            encapsulation: core_2.ViewEncapsulation.None,
            styleUrls: [],
            templateUrl: 'app/app.component.html',
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.Router, http_1.Http, shared_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map