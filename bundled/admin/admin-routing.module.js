"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const admin_component_1 = require("./admin.component");
const admin_dashboard_component_1 = require("./admin-dashboard.component");
const manage_crises_component_1 = require("./manage-crises.component");
const manage_heroes_component_1 = require("./manage-heroes.component");
const auth_guard_service_1 = require("../auth-guard.service");
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                {
                    path: '',
                    component: admin_component_1.AdminComponent,
                    canActivate: [auth_guard_service_1.AuthGuard],
                    children: [
                        {
                            path: '',
                            canActivateChild: [auth_guard_service_1.AuthGuard],
                            children: [
                                { path: 'crises', component: manage_crises_component_1.ManageCrisesComponent },
                                { path: 'heroes', component: manage_heroes_component_1.ManageHeroesComponent },
                                { path: '', component: admin_dashboard_component_1.AdminDashboardComponent }
                            ]
                        }
                    ]
                }
            ])
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AdminRoutingModule);
exports.AdminRoutingModule = AdminRoutingModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=admin-routing.module.js.map