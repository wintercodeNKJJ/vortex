import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-image',
  templateUrl: './top-image.component.html',
  styleUrls: ['./top-image.component.css'],
})
export class TopImageComponent implements OnInit {
  @Input()
  title!: string;

  @Input()
  url!: string;

  @Input()
  description!: string;

  constructor() {}

  ngOnInit(): void {}
}
