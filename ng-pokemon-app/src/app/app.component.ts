import { Component, OnInit } from '@angular/core';

import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { DetailMessagePokemonComponent } from './detail-message-pokemon.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[] = POKEMONS;
  pokemonSelected : Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemons);
  }

  
  selectPokemon(pokemonSelected: Pokemon) {
    console.log(`Vous avez choisi ${pokemonSelected.name}`);
    this.pokemonSelected = pokemonSelected;
  }

  resetSelected() {
    this.pokemonSelected = undefined;
  }
}