import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/types/interface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  pokemons:IPokemon[] = [];
  constructor(private pokemonService: DataService) { }

  ngOnInit(): void {
    this.getMyPokemonsToDisplay();
  }

  getMyPokemonsToDisplay(): void {
    console.log('this.pokemon:', this.pokemonService.getPokemon())
    this.pokemons = this.pokemonService.getPokemon();
  }

}
