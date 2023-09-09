import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroeDescription():string{
    return `${ this.name } - ${this.age}`;
  }

  changeNombre():void{
    this.name = 'spiderman';
  }

  changeEdad():void{
    this.age=36;
  }

  changeOther():void{
    //TODO:
    throw 'No implementado';
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45
  }
}
