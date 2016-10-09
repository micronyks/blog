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
var tech_component_1 = require('./tech.component');
var dotnet_component_1 = require('./dotnet/dotnet.component');
var tech_routing_1 = require('./tech.routing');
var shared_module_1 = require('../shared/shared.module');
var angular2_component_1 = require('./angular2/angular2.component');
var TechModule = (function () {
    function TechModule() {
    }
    TechModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, tech_routing_1.routing],
            declarations: [tech_component_1.TechComponent, angular2_component_1.Angular2Component, dotnet_component_1.DotNetComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], TechModule);
    return TechModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TechModule;
//# sourceMappingURL=tech.module.js.map