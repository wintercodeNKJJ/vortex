import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-ditailcard',
  templateUrl: './item-ditailcard.component.html',
  styleUrls: ['./item-ditailcard.component.css'],
})
export class ItemDitailcardComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  public return(): void {
    this.location.back();
  }
}
