import { Component, OnInit } from '@angular/core';

import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[] = POKEMONS;

  constructor() {}

  ngOnInit() {
    console.table(this.pokemons);
    this.selectPokemon(this.pokemons[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}