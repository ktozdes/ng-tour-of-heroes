import { Injectable } from '@angular/core';


import { Hero } from './hero';
import { Observable } from 'rxjs';
// Firebase
import { AngularFirestore } from '@angular/fire/firestore';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public heroes: Observable<Hero[]>;
  
  constructor(private db: AngularFirestore, private messageService: MessageService) {
		
  }
  getHeroes(): Observable<Hero[]> {
    this.heroes = this.db.collection<Hero>('heroes').valueChanges();
    this.heroes.subscribe(res => console.log(res));
    this.messageService.add('HeroService: fetched heroes');
    return this.heroes;
  }
}
