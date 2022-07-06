import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-detail-message-pokemon',
  templateUrl: 'detail-message-pokemon.component.html',
})

export class DetailMessagePokemonComponent implements OnInit {

  @Input() pokemonDetail : Pokemon | undefined;
  @Output() onClick = new EventEmitter();

  constructor() { }


  ngOnInit(): void {
  }

  close() {
    this.onClick.emit();
  }

}
