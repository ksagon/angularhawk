"use strict";
var router_1 = require('@angular/router');
var resources_component_1 = require('./resources.component');
var teams_component_1 = require('./teams.component');
var resource_stories_component_1 = require("./resource-stories.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/resources',
        pathMatch: 'full'
    },
    {
        path: 'resources',
        component: resources_component_1.ResourceComponent
    },
    {
        path: 'teams',
        component: teams_component_1.TeamComponent
    },
    {
        path: 'resources/:resourceId/stories',
        component: resource_stories_component_1.ResourceStoryComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map