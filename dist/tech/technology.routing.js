"use strict";
var router_1 = require('@angular/router');
var technology_component_1 = require('./technology.component');
//import {Angular2Component} from './angular2.component';
var routes = [
    { path: '', redirectTo: 'technologies', pathMatch: 'full' },
    { path: 'technologies', component: technology_component_1.TechnologyComponent },
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=technology.routing.js.map