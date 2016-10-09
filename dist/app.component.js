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
var core_2 = require('@angular/core');
require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            encapsulation: core_2.ViewEncapsulation.None,
            styleUrls: [],
            template: " \n\n  <md-sidenav-layout>\n\n  <md-sidenav #sidenav mode=\"side\" class=\"app-sidenav\" opened=\"false\">\n    <div class=\"sidenav-title\">\n      <h2>Company</h2>\n    </div>\n    <div class=\"sidenav-menu\">\n      Sidenav Menu\n    </div>\n    \n  </md-sidenav>\n\n  <md-toolbar color=\"primary\" class=\"toolbar\">\n    <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\n      <i class=\"material-icons app-toolbar-menu\">menu</i>\n    </button>\n \n    \n\n  </md-toolbar>\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">NyksBlog</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li> <a routerLink=\"about\" routerLinkActive=\"active\">About</a></li>\n        <li><a routerLink=\"tech\" routerLinkActive=\"active\">Technology</a></li>\n      </ul>\n     \n      \n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n  <div class=\"app-content container well\">\n              <div class=\"app-content\" >\n                      <router-outlet></router-outlet>\n              </div>\n</div>\n</md-sidenav-layout>\n\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map