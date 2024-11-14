import { Injectable } from '@angular/core';
import { Character2 } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})

export class DbzService {

  public characters: Character2[]=[
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name:'Vegeta',
    power: 7500
  }
]

onNewCharacter(character: Character2):void{
  // debugger;
  console.log('MainPage');
  console.log(character);

  const newCharacter: Character2 = {id: uuid(), ...character}

  // Agrega elemento
  this.characters.push(newCharacter);
}


// onDeleteCharacter(index: number):void{
//   this.characters.splice(index, 1);
// }

deleteCharacterById(id: string): void{
  this.characters = this.characters.filter(character => character.id != id);
}

  constructor() { }

}
