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
var ResourceDetailComponent = (function () {
    function ResourceDetailComponent(router, route, resourceService) {
        this.router = router;
        this.route = route;
        this.resourceService = resourceService;
    }
    ResourceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var resourceId = params['resourceId'];
            _this.getResource(resourceId);
        });
    };
    ResourceDetailComponent.prototype.getResource = function (resourceId) {
        var _this = this;
        this.resourceService.getResource(resourceId).then(function (resource) { return _this.populateResource(resource); });
    };
    ResourceDetailComponent.prototype.populateResource = function (resource) {
        var _this = this;
        this.resource = resource;
        this.resourceService.getResourceStories(resource.modelId).then(function (stories) { return _this.populateStoryAverages(stories); });
    };
    ResourceDetailComponent.prototype.populateStoryAverages = function (stories) {
        var averageDevDays = 0;
        var averageQADays = 0;
        for (var _i = 0, stories_1 = stories; _i < stories_1.length; _i++) {
            var story = stories_1[_i];
            averageDevDays += story.devDays / stories.length;
            averageQADays += story.qaDays / stories.length;
        }
        this.resource.averageDevDays = averageDevDays;
        this.resource.averageQADays = averageQADays;
    };
    ResourceDetailComponent.prototype.gotoResourceStories = function (resourceId) {
        var link = ['/resources', resourceId, 'stories'];
        this.router.navigate(link);
    };
    ResourceDetailComponent = __decorate([
        core_1.Component({
            selector: 'hawk-resource-detail',
            templateUrl: 'app/resource-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, resource_service_1.ResourceService])
    ], ResourceDetailComponent);
    return ResourceDetailComponent;
}());
exports.ResourceDetailComponent = ResourceDetailComponent;
//# sourceMappingURL=resource-detail.component.js.map