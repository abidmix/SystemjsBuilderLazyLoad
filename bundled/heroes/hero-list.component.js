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
// TODO SOMEDAY: Feature Componetized like CrisisCenter
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const hero_service_1 = require("./hero.service");
let HeroListComponent = class HeroListComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            this.selectedId = +params['id'];
            this.service.getHeroes()
                .then(heroes => this.heroes = heroes);
        });
    }
    isSelected(hero) { return hero.id === this.selectedId; }
    onSelect(hero) {
        this.router.navigate(['/hero', hero.id]);
    }
};
HeroListComponent = __decorate([
    core_1.Component({
        template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        router_1.Router])
], HeroListComponent);
exports.HeroListComponent = HeroListComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-list.component.js.map