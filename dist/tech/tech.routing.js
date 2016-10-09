"use strict";
var router_1 = require('@angular/router');
var tech_component_1 = require('./tech.component');
var angular2_component_1 = require('./angular2/angular2.component');
var dotnet_component_1 = require('./dotnet/dotnet.component');
var routes = [
    { path: '', redirectTo: 'tech', pathMatch: 'full',
        children: [
            { path: '', redirectTo: 'angular2/2/3', pathMatch: 'full' },
            { path: 'angular2/:id/:id', component: angular2_component_1.Angular2Component },
            { path: 'dotnet', component: dotnet_component_1.DotNetComponent }
        ]
    },
    { path: 'tech', component: tech_component_1.TechComponent,
        children: [
            { path: '', redirectTo: 'angular2/2/3', pathMatch: 'full' },
            { path: 'angular2/:id/:number', component: angular2_component_1.Angular2Component },
            { path: 'dotnet', component: dotnet_component_1.DotNetComponent }
        ]
    },
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=tech.routing.js.map