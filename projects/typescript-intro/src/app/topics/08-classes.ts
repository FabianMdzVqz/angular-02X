// Éxpone la clase

export class Person {

  // Propiedades Opcionales
  //public name: string | undefined;
  //public name?: string;

  // public name: string;
  // private address: string

  // constructor(name: string, address: string){
  //   this.name = name;
  //   this.address = address;
  // }

// Opción simplificada más común
  private address: string;
  constructor(
    //. public name: string,
    //private address: string
    public firstName: string,
    private lastName: string
    ){
      this.address = 'Gotham'
  }
}

const persona = new Person('Copérnico','Italy');

console.log(persona);


// Herencia
// export class Hero extends Person{
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string,

//   ){
//     super(realName, 'Gotham')
//   }
// }

// const heroe = new Hero('Batman', 25, 'Bruce')
// console.log(heroe)


export class Hero {

  //. public person: Person
  constructor(
    public alterEgo: string,
    public age: number,
    //. public realName: string,
    public person: Person
  ){
    //. this.person = new Person(realName, 'Gotham')
  }
}

const person = new Person('Bruce', 'Wayne')


 const heroe = new Hero('Batman', 25, person)
 console.log(heroe)
