import {Component} from 'angular2/core';
import {Hero} from '../../data-model/hero';
import {Input} from "angular2/core";
import {HeroService} from "../../services/hero.service";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";

@Component({
    selector: 'hero-detail',
    template: `
<div *ngIf = "hero">
    <h2>{{hero.name}} details!</h2>
    <div>
        <label>id:</label>{{hero.id}}
    </div>
    <div>
        <input [(ngModel)] = "hero.name" placeholder = "name">
    </div>
    <button (click) = 'goBack()'>Back</button>
</div>
`,
    styleUrls: ['app/css/hero-detail/detail.css']
})

export class HeroDetailComponent implements OnInit {
    @Input() hero:Hero;

    constructor(private _heroService:HeroService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id).then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}
