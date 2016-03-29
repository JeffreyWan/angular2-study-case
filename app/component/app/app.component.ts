import {Component} from "angular2/core";
import {HeroComponent} from "../heroes/heroes.component";
import {HeroService} from "../../services/hero.service";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {DashboardComponent} from "../navigate/dashboard.component";
import {HeroDetailComponent} from "../hero_detail/hero-detail";
/**
 * Created by Jeffrey on 16/3/28.
 */

@Component({
    selector: "my-app",
    template: `
    <h2>{{title}}</h2>
    <nav>
        <a [routerLink] = "['Heroes']">Heroes</a>
        <a [routerLink] = "['Dashboard']">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['app/css/app.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})


/**
 * 路由配置
 */
@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])

export class AppComponent {
    title = "Tour of Heroes";
}
