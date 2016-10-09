"use strict";
var router_1 = require('@angular/router');
var tech_component_1 = require('./tech.component');
var angular2_component_1 = require('./angular2/angular2.component');
var dotnet_component_1 = require('./dotnet/dotnet.component');
var routes = [
    { path: '', component: tech_component_1.TechComponent,
        children: [
            { path: '', component: angular2_component_1.Angular2Component },
            { path: 'dotnet', component: dotnet_component_1.DotNetComponent, pathMatch: 'prefix' }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=tech.routing.js.map