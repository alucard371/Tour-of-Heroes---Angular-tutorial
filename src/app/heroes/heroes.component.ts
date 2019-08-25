import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
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

  

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
