import { Injectable } from '@angular/core';


import { Item } from './item';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public items: Observable<Item[]>;
  private db: AngularFirestore;
  
  constructor(db: AngularFirestore, private messageService: MessageService) {
    this.db = db;
		
  }
  getItems(): Observable<Item[]> {
    this.items = this.db.collection<Item>('items').valueChanges();
    this.items.subscribe(res => console.log(res));
    this.messageService.add('ItemService: fetched heroes');
    return this.items;
  }
}