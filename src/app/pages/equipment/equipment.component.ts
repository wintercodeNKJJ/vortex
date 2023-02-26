import { Component, OnInit } from '@angular/core';
import { SanityserviceService } from 'src/app/dataservice/sanityservice.service';
import { Category } from 'src/app/structures/category';
import { Equipments } from 'src/app/structures/equipment';
import { Events } from 'src/app/structures/events';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
})
export class EquipmentComponent implements OnInit {
  constructor(private service: SanityserviceService) {}

  public equipments: Equipments[] = [];
  public cat: Category[] = [];

  public Event: Events[] = [];
  public Event1: Events[] = [];

  public imageUrl(source: any) {
    return this.service.urlFor(source);
  }

  ngOnInit(): void {
    this.getEquipments();
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
    this.cat = await this.service.getCategory('Equipment');
    return this.cat;
  }

  async getEquipments() {
    this.equipments = await this.service.getEquipments();
    return this.equipments;
  }
}
