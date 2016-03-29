/**
 * Created by Jeffrey on 16/3/28.
 */

import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Hero} from "../../data-model/hero";
import {HeroService} from "../../services/hero.service";
import {Router} from "angular2/router";
@Component({
    selector: "ng-dashboard",
    templateUrl: 'app/html/navigate/dashboard.html',
    styleUrls: ['app/css/navigate/dashboard.css']

//    template: `
//<h3>Top Heroes</h3>
//<div class="grid grid-pad">
//    <div *ngFor="#hero of heroes" (click)="gotoDetail(hero)" class="col-1-4">
//        <div class="module hero">
//            <h4>{{hero.name}}</h4>
//        </div>
//    </div>
//</div>
//    `
})

export class DashboardComponent implements OnInit {

    heroes:Hero[] = [];

    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    /**
     * 声明创建服务和路由
     * @param _heroService
     * @param _router
     */
    constructor(
        private _heroService:HeroService,
        private _router: Router
    ) {
    }

    gotoDetail(hero: Hero) {
        //Do something!
        let link = ['HeroDetail', {id: hero.id}];
        this._router.navigate(link);
    }
}
