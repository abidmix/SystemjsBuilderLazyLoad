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
const hero_service_1 = require("./hero.service");
let HeroDetailComponent = class HeroDetailComponent {
    constructor(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    get routeAnimation() {
        return true;
    }
    get display() {
        return 'block';
    }
    get position() {
        return 'absolute';
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getHero(id).then(hero => this.hero = hero);
        });
    }
    gotoHeroes() {
        let heroId = this.hero ? this.hero.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    }
};
__decorate([
    core_1.HostBinding('@routeAnimation'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], HeroDetailComponent.prototype, "routeAnimation", null);
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], HeroDetailComponent.prototype, "display", null);
__decorate([
    core_1.HostBinding('style.position'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], HeroDetailComponent.prototype, "position", null);
HeroDetailComponent = __decorate([
    core_1.Component({
        template: `
  <h2>HEROES</h2>
  <div *ngIf="hero">
    <h3>"{{hero.name}}"</h3>
    <div>
      <label>Id: </label>{{hero.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoHeroes()">Back</button>
    </p>
  </div>
  `,
        animations: [
            core_1.trigger('routeAnimation', [
                core_1.state('*', core_1.style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })),
                core_1.transition(':enter', [
                    core_1.style({
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    }),
                    core_1.animate('0.2s ease-in')
                ]),
                core_1.transition(':leave', [
                    core_1.animate('0.5s ease-out', core_1.style({
                        opacity: 0,
                        transform: 'translateY(100%)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        hero_service_1.HeroService])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-detail.component.js.map