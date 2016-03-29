/**
 * Created by Jeffrey on 16/3/28.
 */
import {Component} from 'angular2/core';
import {Hero} from '../../data-model/hero';
import {HeroDetailComponent} from '../hero_detail/hero-detail';
import {HeroService} from '../../services/hero.service';
import {OnInit} from "angular2/core";
import {Router} from "angular2/router";

@Component({
    selector: 'heroes',
//template : '<h1>{{title}}</h1> <h2>{{hero}} details!</h2>'

//template : '<h1>{{title}}</h1> <h2>{{hero.name}} details!</h2>'

//template : `
//    <h1>{{title}}</h1>
//    <h2>{{hero.name}} details!</h2>
//    <div>
//        <label>id:</label>{{hero.id}}
//    </div>
//    <div>
//        <label>name:</label>
//        <input [(ngModel)] = "hero.name" placeholder = "name">
//    </div>
//`

    template: `
<h1>{{title}}</h1>
<div>
    <ul class = "heroes">
        <li *ngFor = "#hero of heroes" [class.selected] = "hero === selectedHero" (click) = "onSelect(hero)">
            <span class = "badge">{{hero.id}}</span>
            {{hero.name}}
        </li>
    </ul>
</div>
<!--<hero-detail [hero] = "selectedHero"></hero-detail>-->
<div *ngIf = 'selectedHero'>
    <h2>
        {{selectedHero.name | uppercase}} is my hero
    </h2>
    <button (click) = "gotoDetail()">View Detail</button>
</div>
`,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 10em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
    directives: [HeroDetailComponent]
})

export class HeroComponent implements OnInit{

    ngOnInit():any {
        this.getHeroes();
    }
    title = 'Tour of Heroes';

    //public hero = 'Windstrom';

    //public hero: Hero = {
    //    id: 1,
    //    name: 'Windstrom'
    //};
    heroes:Hero[];
    //heroes = HEROES;

    selectedHero:Hero;

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    };

    constructor(
        private _heroService: HeroService,
        private _router: Router
    ) {}

    getHeroes() {
        //this.heroes = this._heroService.getHeroes();
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);

        //this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
    /*
     heroes = this._heroService.getHeroes();
     */
    gotoDetail(){
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
}



