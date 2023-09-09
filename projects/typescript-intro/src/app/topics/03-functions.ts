function addNUmbers(a: number, b: number){
  return a+b;
}

const addNumbersArrow = (a: number, b: number) => {
  return `${a + b}`;
}

function multiply(firstnumber: number, secondnumber?: number, base: number=2){
  return firstnumber * base;
}

/*
const result:number=addNUmbers(1,2);
const result2:string = addNumbersArrow(3,4);
const multiplyResult: number = multiply(5)
console.log({result, result2, multiplyResult})
*/

interface Character03{
  name: string,
  hp: number;
  showHp: () => void; // Declaración de Método
}

const healCharacter = (character: Character03, amount: number) => {
  character.hp += amount;
}

const strider03: Character03 = {
  name: 'strider',
  hp:50,
  showHp(){
    console.log(`Puntos de vida ${this.hp}`)
  }
}

healCharacter(strider03, 20);

strider03.showHp();
