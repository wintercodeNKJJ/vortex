import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css'],
})
export class ItemcardComponent implements OnInit {
  constructor(private nav: Router) {}

  @Input()
  _id?: string;

  @Input()
  title?: string;

  @Input()
  url?: string;

  ngOnInit(): void {}

  public ditail() {
    console.log('called');
    this.nav.navigate(['ditails/' + this._id]);
  }
}
