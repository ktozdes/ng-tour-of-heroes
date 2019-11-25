import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { ItemService } from '../item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public selectedItem: Item;
  items: Observable<Item[]>;
	constructor(private itemService: ItemService) {
	}
	getHeroes(): void {
		this.items = this.itemService.getItems();
	}

	onSelect(item: Item) : void {
		this.selectedItem = item;
	}

	ngOnInit() {
		this.getHeroes();
	}
}