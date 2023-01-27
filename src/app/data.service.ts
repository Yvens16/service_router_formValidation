import { Injectable } from '@angular/core';
import { IPokemon, PokemonType } from 'src/types/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  pokedex:IPokemon[] = [];
  constructor() {}


  addPokemon(nameArg: string, typeArg:PokemonType): void {
    this.pokedex.push({name: nameArg, type: typeArg});
    console.log('this.pokedex:', this.pokedex)
  }


  getPokemon(): IPokemon[] {
    return this.pokedex;
  };

}
