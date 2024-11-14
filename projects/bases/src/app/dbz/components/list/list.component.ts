import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character2 } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character2[]=[];


 @Output()
  onDeleteId: EventEmitter<string>=new EventEmitter;


  onDeleteCharacter(index: number):void{
    console.log(index);
    this.onDeleteId.emit(this.characterList[index].id)
  }
}
