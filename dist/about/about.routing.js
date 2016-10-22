"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about.component');
var about1_component_1 = require('./about1.component');
var routes = [
    { path: '', component: about_component_1.AboutComponent },
    { path: 'detail/:id', component: about1_component_1.About1Component },
    { path: 'about1', component: about1_component_1.About1Component },
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=about.routing.js.map