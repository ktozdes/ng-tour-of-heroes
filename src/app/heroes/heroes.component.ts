import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	public selectedHero : Hero;
	heroes: Observable<Hero[]>;
	constructor(private heroService: HeroService) {
	}
	getHeroes(): void {
		this.heroes = this.heroService.getHeroes();
	}

	onSelect(hero: Hero) : void {
		this.selectedHero = hero;
	}

	ngOnInit() {
		this.getHeroes();
	}

}
