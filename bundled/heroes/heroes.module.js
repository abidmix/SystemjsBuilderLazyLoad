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
const forms_1 = require("@angular/forms");
const hero_list_component_1 = require("./hero-list.component");
const hero_detail_component_1 = require("./hero-detail.component");
const hero_service_1 = require("./hero.service");
const heroes_routing_module_1 = require("./heroes-routing.module");
let HeroesModule = class HeroesModule {
};
HeroesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            heroes_routing_module_1.HeroRoutingModule
        ],
        declarations: [
            hero_list_component_1.HeroListComponent,
            hero_detail_component_1.HeroDetailComponent
        ],
        providers: [
            hero_service_1.HeroService
        ]
    })
], HeroesModule);
exports.HeroesModule = HeroesModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=heroes.module.js.map