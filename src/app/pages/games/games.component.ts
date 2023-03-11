import { Events } from 'src/app/structures/events';
import { Category } from './../../structures/category';
import { Games } from './../../structures/games';
import { Component, OnInit } from '@angular/core';
import { SanityserviceService } from 'src/app/dataservice/sanityservice.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  constructor(private service: SanityserviceService) {}

  public games: Games[] = [];
  public games1: Games[] = [];
  public cat: Category[] = [];
  public bestGames: Games[] = [];

  public Event: Events[] = [];
  public Event1: Events[] = [];

  private _gamesFilter: string = '';

  public imageUrl(source: any) {
    return this.service.urlFor(source);
  }

  ngOnInit(): void {
    this.getGames();
    this.getCategory();
    this.getEvents();
  }

  async getEvents() {
    this.Event = await this.service.getEvents();

    let i;
    for (i = 0; i < 2; i++) {
      this.Event1[i] = this.Event[i];
    }
  }

  async getCategory() {
    this.cat = await this.service.getCategory('Games');
    return this.cat;
  }

  async getGames() {
    this.games = await this.service.getGames();
    this.games1 = this.games;

    let j;
    for (j = 0; j < 3; j++) {
      this.bestGames[j] = this.games[j];
    }
    return this.games;
  }

  public get gamesFilter(): string {
    return this._gamesFilter;
  }

  public set gamesFilter(filter: string) {
    this._gamesFilter = filter;
    this.games1 = this._gamesFilter
      ? this.filterGames(this._gamesFilter)
      : this.games;

    console.log('the games filtered', this.games1);
  }

  private filterGames(criteria: string): Games[] {
    criteria = criteria.toLowerCase();

    const res = this.games.filter(
      (game: Games) => game.title.toLowerCase().indexOf(criteria) !== -1
    );

    return res;
  }
}
