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
const auth_guard_service_1 = require("./auth-guard.service");
const auth_service_1 = require("./auth.service");
const login_component_1 = require("./login.component");
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'login', component: login_component_1.LoginComponent }
            ])
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            auth_guard_service_1.AuthGuard,
            auth_service_1.AuthService
        ]
    })
], LoginRoutingModule);
exports.LoginRoutingModule = LoginRoutingModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=login-routing.module.js.map