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
var ResourceComponent = (function () {
    function ResourceComponent(router, resourceService) {
        this.router = router;
        this.resourceService = resourceService;
    }
    ResourceComponent.prototype.ngOnInit = function () {
        this.getResources();
    };
    ResourceComponent.prototype.getResources = function () {
        var _this = this;
        this.resourceService.getResources().then(function (pagedResources) { return _this.pagedResources = pagedResources; });
    };
    ResourceComponent.prototype.gotoResourceStories = function (resource) {
        var link = ['/resources', resource.modelId, 'stories'];
        this.router.navigate(link);
    };
    ResourceComponent = __decorate([
        core_1.Component({
            selector: 'hawk-resources',
            templateUrl: 'app/resources.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, resource_service_1.ResourceService])
    ], ResourceComponent);
    return ResourceComponent;
}());
exports.ResourceComponent = ResourceComponent;
//# sourceMappingURL=resources.component.js.map