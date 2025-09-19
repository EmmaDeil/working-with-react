import React from 'react'

const ProductList = () => {

   const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Headphones", price: 200 },
  { id: 3, name: "Mouse", price: 50 }
];

  return (
    <div>
      {products.map(product => (
         <div
            key={product.id}
            style={{ color: product.price > 500 ? 'red' : 'inherit' }}
         >
            {product.name} - ${product.price}
         </div>
      ))}
    </div>
  )
}

export default ProductList
