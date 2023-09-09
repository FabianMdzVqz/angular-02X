// Módulo Para demostrar Importación - Exportación

import {Product, taxCalculation} from './06-function-destructuring'

const shoppingCartImport: Product[] = [
  {

    description: 'Nokia',
    price: 100
  },
  {
    description: 'iPad',
    price: 150
  }
];

const [total, tax] = taxCalculation({
  tax: 16,
  products: shoppingCartImport
})

console.log('Total', total)
console.log('Tax', tax)

