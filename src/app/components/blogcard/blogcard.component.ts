import { Games } from './../../structures/games';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css'],
})
export class BlogcardComponent implements OnInit {
  constructor() {}

  @Input()
  public game!: Games;

  @Input()
  public url!: string;

  ngOnInit(): void {
    this.gameItem();
  }

  public gameItem() {
    console.log('the game', this.game);
  }
}
