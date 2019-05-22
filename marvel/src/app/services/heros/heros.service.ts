import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})

export class HerosService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllHeros() {
    const md5 = new Md5();
    const timestamp = Number(new Date());
    const hash = Md5.hashStr(timestamp + 'ebd407c102ea3f1262b8dd370cfa04d4a132a867d8b23f3429d72898aaffd1a321761b4a');

    return this.http.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&orderBy=name&limit=50&apikey=d8b23f3429d72898aaffd1a321761b4a&hash=${hash}`).toPromise();
  }

  getDescription(id) {
    const md5 = new Md5();
    const timestamp = Number(new Date());
    const hash = Md5.hashStr(timestamp + 'ebd407c102ea3f1262b8dd370cfa04d4a132a867d8b23f3429d72898aaffd1a321761b4a');

    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&orderBy=name&limit=20&apikey=d8b23f3429d72898aaffd1a321761b4a&hash=${hash}`).toPromise();
  }
}
