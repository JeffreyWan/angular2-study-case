/**
 * Created by Jeffrey on 16/3/25.
 */

 import {Injectable} from 'angular2/core';
 import {HEROES} from '../datasource/hero.datasouce';
import {Hero} from "../data-model/hero";

 @Injectable()
 export class HeroService {

     getHeroes() {
        return Promise.resolve(HEROES);
     }

     /**
      * 延迟2秒获取数据
      * @returns {Promise<Hero[]>|Promise}
      */
     // See the "Take it slow" appendix
     getHeroesSlowly() {
         return new Promise<Hero[]>(resolve =>
             setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
         );
     }

     getHero(id: number){
         return Promise.resolve(HEROES).then(
             heroes => heroes.filter(hero => hero.id === id)[0]
         );
     }
 }
