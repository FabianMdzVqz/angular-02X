import { Component} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Character2 } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

// Los módulos se pueden equiparar a los espoacios de nombres
export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  get characters(): Character2[]{
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id: string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character2){
    this.dbzService.onNewCharacter(character);
  }

}
