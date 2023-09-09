export interface Passenger {
  name: string;


  children?: string[]

}


const passenger: Passenger ={
  name: 'Fabian'
}

const passenger2: Passenger = {
  name : 'Fabian2'
}

const passenger3: Passenger = {
  name : 'Fabian3',
  children: ['child1', '2']
}

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;

  // No se esperaría en la práctica un valor nulo
  const howManyChildrenNNA = passenger.children!.length;


  console.log(passenger.name, howManyChildren);
}

printChildren(passenger3)
