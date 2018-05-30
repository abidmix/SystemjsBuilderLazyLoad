"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const admin_component_1 = require("./admin.component");
const admin_dashboard_component_1 = require("./admin-dashboard.component");
const manage_crises_component_1 = require("./manage-crises.component");
const manage_heroes_component_1 = require("./manage-heroes.component");
const admin_routing_module_1 = require("./admin-routing.module");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            admin_routing_module_1.AdminRoutingModule
        ],
        declarations: [
            admin_component_1.AdminComponent,
            admin_dashboard_component_1.AdminDashboardComponent,
            manage_crises_component_1.ManageCrisesComponent,
            manage_heroes_component_1.ManageHeroesComponent
        ]
    })
], AdminModule);
exports.AdminModule = AdminModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=admin.module.js.map