import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';

@Component({
  selector: 'my-app',
  template: `
            <h1>{{title}}</h1>
            <nav>
              <a [routerLink]="['Dashboard']">Dashboard</a>
              <a [routerLink]="['Heroes']">Heroes</a>
            </nav>
            <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    HeroService,
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
])

export class AppComponent {
  title = 'Tour of Heroes';
}
