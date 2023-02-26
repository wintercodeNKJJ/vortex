import { Services } from './../structures/services';
import { Category } from './../structures/category';
import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Games } from '../structures/games';
import { Events } from '../structures/events';

@Injectable({
  providedIn: 'root',
})
export class SanityserviceService {
  constructor() {}

  sanityClientCredentials = {
    option: sanityClient({
      projectId: 'ynzvas75',
      dataset: 'production',
    }),
  };

  urlFor = (source: any) =>
    imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  // games
  async getGames(): Promise<Games[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "games"]{
        _id,
    title,
    mainImage,
    releaseDate,
    poster
  }`
    );
  }

  async getGame(id: string): Promise<Games[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "games" && _id =="` +
        id +
        `"]{
        _id,
        title,
        mainImage,
      }`
    );
  }

  // Categories
  async getCategory(name: string): Promise<Category[]> {
    return await this.sanityClientCredentials.option.fetch(
      `
    *[_type == "category" && title == "` +
        name +
        `"]{
      title,
        image,
        description,
    }
    `
    );
  }

  // services
  async getServices(): Promise<Services[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "services"]{
        _id,
    title,
    mainImage,
    releaseDate,
    poster
  }`
    );
  }

  async getService(id: string): Promise<Services[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "services" && _id =="` +
        id +
        `"]{
        _id,
        title,
        mainImage,
      }`
    );
  }

  // services
  async getEvents(): Promise<Events[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "event"]{
        _id,
    title,
    mainImage
  }`
    );
  }

  async getEvent(id: string): Promise<Events[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "events" && _id =="` +
        id +
        `"]{
        _id,
        title,
        mainImage,
      }`
    );
  }

  // Equipments
  async getEquipments(): Promise<Events[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "equipment"]{
        _id,
    title,
    mainImage
  }`
    );
  }

  async getEquipment(id: string): Promise<Events[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "equipment" && _id =="` +
        id +
        `"]{
        _id,
        title,
        mainImage,
      }`
    );
  }
}
