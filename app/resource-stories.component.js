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
var resource_service_1 = require('./resource.service');
var ResourceStoryComponent = (function () {
    function ResourceStoryComponent(route, resourceService) {
        this.route = route;
        this.resourceService = resourceService;
    }
    ResourceStoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var resourceId = +params['resourceId'];
            _this.resourceService.getResourceStories(resourceId.toString())
                .then(function (stories) { return _this.stories = stories; });
        });
    };
    ResourceStoryComponent.prototype.goBack = function () {
        window.history.back();
    };
    ResourceStoryComponent = __decorate([
        core_1.Component({
            selector: 'hawk-resource-stories',
            templateUrl: 'app/resource-stories.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, resource_service_1.ResourceService])
    ], ResourceStoryComponent);
    return ResourceStoryComponent;
}());
exports.ResourceStoryComponent = ResourceStoryComponent;
//# sourceMappingURL=resource-stories.component.js.map