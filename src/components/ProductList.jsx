import React from 'react'

const ProductList = () => {

   const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Headphones", price: 200 },
  { id: 3, name: "Mouse", price: 50 },
  { id: 4, name: "Smartphone", price: 800 },
  { id: 5, name: "Monitor", price: 300 },
  { id: 6, name: "Keyboard", price: 500 },
  { id: 7, name: "Tablet", price: 600 }
];

  return (
    <div>
      <h4>Task: Render each product as Name - $Price, but highlight (in red) any product with a price greater than $500.</h4>
      {products.map(product => (
         <div
            key={product.id}
            style={{ color: product.price > 500 ? 'red' : 'inherit', marginBottom: "10px" }}
         >
            {product.name} - ₦{product.price}
         </div>
      ))}
    </div>
  )
}

export default ProductList;
