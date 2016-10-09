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
var DotNetComponent = (function () {
    function DotNetComponent(route) {
        this.route = route;
    }
    DotNetComponent.prototype.ngOnInit = function () {
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParams
            .map(function (params) { return params['session_id'] || 'None'; });
        // Capture the fragment if available
        this.token = this.route
            .fragment
            .map(function (fragment) { return fragment || 'None'; });
    };
    DotNetComponent = __decorate([
        core_1.Component({
            template: "<h2>\n   <br>\n   This Dotnet Component \n  </h2>\n   <p>Dashboard</p>\n\n    <p>Session ID: {{ sessionId | async }}</p><bR><br><br><bR><br><br><br><bR><bR><br><br><bR><br><br><br><bR>\n<bR><br><br><bR><br><br><br><bR><bR><br><br><bR><br><br><br><bR><bR><br><br><bR><br><br><br><bR>   \n\n\n <div id=\"anchor\">should come here</div>\n    <p>Token: {{ token | async }}</p>\n  \n  \n  \n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], DotNetComponent);
    return DotNetComponent;
}());
exports.DotNetComponent = DotNetComponent;
//# sourceMappingURL=dotnet.component.js.map