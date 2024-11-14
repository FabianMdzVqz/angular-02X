import { Component, EventEmitter, Output } from '@angular/core';
import { Character2 } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

    @Output()
    onNewCharacter: EventEmitter<Character2> = new EventEmitter;

  public character: Character2  ={
    power: 0,
    name: ''
  }

  emitCharacter():void{
    console.log(this.character);

    if(this.character.name.length === 0) return;

    // Por referencia
    /*this.onNewCharacter.emit(this.character);*/

    // Por valor
    const {name, power} = this.character;

    this.onNewCharacter.emit({name, power});

    this.character.name = "";
    this.character.power = 0;
  }


}
