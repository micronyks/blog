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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var hero_service_1 = require('./hero.service');
var heroes_routing_module_1 = require('./heroes-routing.module');
var herolist_component_1 = require('./herolist.component');
var herodetail_component_1 = require('./herodetail.component');
var HeroesModule = (function () {
    function HeroesModule() {
    }
    HeroesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                heroes_routing_module_1.HeroRoutingModule
            ],
            declarations: [
                herolist_component_1.HerolistComponent,
                herodetail_component_1.HerodetailComponent
            ],
            providers: [
                hero_service_1.HeroService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroesModule);
    return HeroesModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroesModule;
//# sourceMappingURL=heroes.module.js.map