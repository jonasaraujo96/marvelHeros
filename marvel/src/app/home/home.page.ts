import { Component, OnInit } from '@angular/core';
import { HerosService } from '../services/heros/heros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  public heros: any;

  constructor(private herosService: HerosService, private router: Router) {
  }

  ngOnInit() {
    this.getAllHeros();
  }

  async getAllHeros() {
    let result: any;
    result = await this.herosService.getAllHeros();
    this.heros = result.data.results;
    console.log(this.heros);
  }

}
