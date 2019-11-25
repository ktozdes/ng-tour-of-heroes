import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {AddHeroComponent} from './add-hero/add-hero.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'add-hero', component: AddHeroComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'items', component: ItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
