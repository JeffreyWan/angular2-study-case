import {Component} from 'angular2/core';
import {Hero} from '../../data-model/hero';

@Component ({
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
</div>
`,
    inputs: ['hero']
})

export class HeroDetailComponent {
    hero: Hero
}
