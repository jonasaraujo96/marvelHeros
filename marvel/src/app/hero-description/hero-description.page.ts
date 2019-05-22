import { Component, OnInit } from '@angular/core';
import { HerosService } from '../services/heros/heros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-description',
  templateUrl: './hero-description.page.html',
  styleUrls: ['./hero-description.page.scss'],
})
export class HeroDescriptionPage implements OnInit {
    ;
  public hero = {
    name: null,
    description: null,
    thumb: null
  };

  constructor(private herosService: HerosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDescription();
  }

  async getDescription() {
    const heroId = this.route.snapshot.params.id;

    if (heroId) {
      let result: any;
      result = await this.herosService.getDescription(heroId);
      const data = await result.data.results;
      this.hero.name = await data[0].name;
      this.hero.description = await data[0].description;
      this.hero.thumb = await `${data[0].thumbnail.path}.${data[0].thumbnail.extension}`;
    }
  }

}
