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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const selective_preload_strategy_1 = require("../selective-preload-strategy");
require("rxjs/add/operator/map");
let AdminDashboardComponent = class AdminDashboardComponent {
    constructor(route, preloadStrategy) {
        this.route = route;
        this.preloadStrategy = preloadStrategy;
        this.modules = preloadStrategy.preloadedModules;
    }
    ngOnInit() {
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParams
            .map(params => params['session_id'] || 'None');
        // Capture the fragment if available
        this.token = this.route
            .fragment
            .map(fragment => fragment || 'None');
    }
};
AdminDashboardComponent = __decorate([
    core_1.Component({
        template: `
    <p>Dashboard</p>

    <p>Session ID: {{ sessionId | async }}</p>
    <a id="anchor"></a>
    <p>Token: {{ token | async }}</p>

    Preloaded Modules
    <ul>
      <li *ngFor="let module of modules">{{ module }}</li>
    </ul>
  `
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        selective_preload_strategy_1.PreloadSelectedModules])
], AdminDashboardComponent);
exports.AdminDashboardComponent = AdminDashboardComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=admin-dashboard.component.js.map