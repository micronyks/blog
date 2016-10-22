"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: "home",
        component: home_component_1.HomeComponent
    },
    { path: 'about', loadChildren: 'app/about/about.module' },
    { path: 'tech', loadChildren: 'app/tech/tech.module' },
    { path: 'heroes', loadChildren: 'app/heroes/heroes.module' }
];
exports.routing = router_1.RouterModule.forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map