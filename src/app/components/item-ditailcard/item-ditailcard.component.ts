import { Games } from './../../structures/games';
import { SanityserviceService } from 'src/app/dataservice/sanityservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-ditailcard',
  templateUrl: './item-ditailcard.component.html',
  styleUrls: ['./item-ditailcard.component.css'],
})
export class ItemDitailcardComponent implements OnInit {
  public game: Games[] = [];
  constructor(
    private location: Location,
    private service: SanityserviceService,
    private route: ActivatedRoute
  ) {}

  _id!: string;
  url?: string;

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('id')!;
    this.getGame(this._id);
  }

  public imageUrl(source: any) {
    return this.service.urlFor(source);
  }

  async getGame(id: string) {
    this.game = await this.service.getGame(id);
    this.url = this.imageUrl(this.game[0].mainImage).url();
    console.log('games', this.game[0], 'url', this.url);
    return this.game;
  }
  public return(): void {
    this.location.back();
  }
}
