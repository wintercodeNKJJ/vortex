import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css'],
})
export class ItemcardComponent implements OnInit {
  constructor(private nav: Router) {}

  ngOnInit(): void {}

  public ditail() {
    console.log('called');
    this.nav.navigate(['ditails']);
  }
}
