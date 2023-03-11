import { Games } from './../../structures/games';
import { Component, OnInit } from '@angular/core';
import { SanityserviceService } from '../../dataservice/sanityservice.service';
import { Services } from 'src/app/structures/services';
import { Events } from 'src/app/structures/events';
import { Category } from 'src/app/structures/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: SanityserviceService) {}

  public games: Games[] = [];
  public games1: Games[] = [];
  public games2: Games[] = [];
  public bestGames: Games[] = [];

  public services: Services[] = [];
  public services1: Services[] = [];

  public Event: Events[] = [];
  public Event1: Events[] = [];

  public cat: Category[] = [];

  private _gamesFilter: string = '';

  public filteredGames: Games[] = [];

  public imageUrl(source: any) {
    return this.service.urlFor(source);
  }

  ngOnInit(): void {
    this.getGames();
    this.getServices();
    this.getEvents();
    this.getCategory();
  }

  async getCategory() {
    this.cat = await this.service.getCategory('Vortex Gamers');

    console.log('category', this.cat);
    return this.cat;
  }

  async getEvents() {
    this.Event = await this.service.getEvents();

    let i;
    for (i = 0; i < 2; i++) {
      this.Event1[i] = this.Event[i];
    }
  }

  async getServices() {
    this.services = await this.service.getServices();

    let i;
    for (i = 0; i < 4; i++) {
      this.services1[i] = this.services[i];
    }

    return this.services;
  }

  async getGames() {
    this.games = await this.service.getGames();

    // copy
    let i, j;
    for (i = 0; i < 10; i++) {
      this.games1[i] = this.games[i];
      this.games2[i] = this.games[i];
    }

    for (j = 0; j < 3; j++) {
      this.bestGames[j] = this.games[j];
    }

    console.log('best games', this.bestGames);

    return this.games;
  }

  public get gamesFilter(): string {
    return this._gamesFilter;
  }

  public set gamesFilter(filter: string) {
    this._gamesFilter = filter;
    this.games1 = this._gamesFilter
      ? this.filterGames(this._gamesFilter)
      : this.games2;
  }

  private filterGames(criteria: string): Games[] {
    criteria = criteria.toLowerCase();

    const res = this.games.filter(
      (game: Games) => game.title.toLowerCase().indexOf(criteria) !== -1
    );

    return res;
  }
}
