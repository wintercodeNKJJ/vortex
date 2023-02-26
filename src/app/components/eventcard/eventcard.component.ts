import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.css'],
})
export class EventcardComponent implements OnInit {
  @Input()
  _id?: string;

  @Input()
  title?: string;

  @Input()
  url?: string;

  constructor() {}

  ngOnInit(): void {}
}
