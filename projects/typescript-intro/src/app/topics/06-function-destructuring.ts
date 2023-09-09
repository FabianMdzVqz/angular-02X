interface Product
{
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 1500
}

const tablet: Product = {
  description: "iPad Air",
  price: 250.0
}

interface TaxCalculationOptions{
  tax: number;
  products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): number[]{
  let total = 0;

  const {products, tax} = options;
  products.forEach(({price}) => {
    total += price;
  });

  return [total, total*tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;


const [Total, Tax] = taxCalculation({
  products: shoppingCart,
  tax
});

console.log('Total', Total);
console.log('Tax', Tax)

export{
  Product,
  TaxCalculationOptions,
  taxCalculation
};
