import { Component, OnInit } from '@angular/core';

import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

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

  selectPokemon(pokemonId: String) {
    const pokemon: Pokemon | undefined = this.pokemons.find(pokemon => pokemon.id == +pokemonId);
    if (pokemon){
      this.pokemonSelected = pokemon;
      console.log(`Vous avez choisi ${pokemon.name}`);
    } else {3
      this.pokemonSelected = pokemon;
      console.log('Le pokemon n\'existe pas');
    }
  }
}