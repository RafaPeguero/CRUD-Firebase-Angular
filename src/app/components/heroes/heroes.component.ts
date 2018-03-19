import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
heroes: any;
loading = true;
  constructor( private _heroesService: HeroesService) {
    this._heroesService.getHeroes().subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
      this.loading = false;
    });
   }

  ngOnInit() {
  }

  borrarHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$).subscribe(respuesta => {
      if (respuesta) {
        console.error(respuesta);
      } else {
        delete this.heroes[key$];
      }
    });
  }

}
