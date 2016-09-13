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
var team_service_1 = require('./team.service');
var TeamComponent = (function () {
    function TeamComponent(router, teamService) {
        this.router = router;
        this.teamService = teamService;
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams().then(function (pagedTeams) { return _this.pagedTeams = pagedTeams; });
    };
    TeamComponent = __decorate([
        core_1.Component({
            selector: 'hawk-teams',
            templateUrl: 'app/teams.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, team_service_1.TeamService])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=teams.component.js.map