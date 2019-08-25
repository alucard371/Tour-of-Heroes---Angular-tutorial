import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  

  // private _hero: Hero = {
  //   id: 1,
  //   name: 'windstorm'
  // };
  // public get hero(): Hero {
  //   return this._hero;
  // }
  // public set hero(value: Hero) {
  //   this._hero = value;
  // }

  

  constructor(
    private heroService: HeroService
  ) {
    
   }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
