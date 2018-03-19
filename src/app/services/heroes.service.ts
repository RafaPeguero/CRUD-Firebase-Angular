import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe  } from '../interfaces/heroe.interface';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { map } from 'rxjs/operators';


@Injectable()
export class HeroesService {

  heroesURL = 'https://heroesapp-1b00f.firebaseio.com/heroes.json';
  heroeURL = 'https://heroesapp-1b00f.firebaseio.com/heroes/';
  constructor( private http: Http) { }


  ActualizarHeroe(heroe: Heroe, key$: string)  {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(heroe);
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({
      'Content-type': 'application/json'
    });

    // tslint:disable-next-line:prefer-const
    let url = `${this.heroeURL}/${key$}.json`;
    return this.http.put(url, body, { headers} )
      .map( res => {
        console.log(res.json());
        return res.json();
      });
  }


  NuevoHeroe(heroe: Heroe) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(heroe);
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({
      'Content-type': 'application/json'
    });
    return this.http.post (this.heroesURL, body, { headers} )
      .map( res => {
        console.log(res.json());
        return res.json();
      });
  }


  GetHeroe( key$: string) {
    // tslint:disable:prefer-const
    let url = `${this.heroeURL}/${key$}.json`;
    return this.http.get(url).map(res => res.json());
  }

  getHeroes() {
    return this.http.get(this.heroesURL).map(res => res.json());
  }

  borrarHeroe(key$: string) {
    let url = `${this.heroeURL}/${key$}.json`;
    return this.http.delete(url).map(res => res.json());
  }
}
