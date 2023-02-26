import { Component, OnInit } from '@angular/core';
import { SanityserviceService } from 'src/app/dataservice/sanityservice.service';
import { Category } from 'src/app/structures/category';
import { Events } from 'src/app/structures/events';
import { Services } from 'src/app/structures/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  constructor(private service: SanityserviceService) {}

  public services: Services[] = [];
  public cat: Category[] = [];

  public Event: Events[] = [];
  public Event1: Events[] = [];

  public imageUrl(source: any) {
    return this.service.urlFor(source);
  }

  ngOnInit(): void {
    this.getServices();
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
    this.cat = await this.service.getCategory('Services');
    return this.cat;
  }

  async getServices() {
    this.services = await this.service.getServices();
    return this.services;
  }
}
