import React from 'react'

const ShoppingList = () => {
   const shoppingList = ["Milk", "Bread", "Eggs", "Cheese", "Butter"];
return (
   <div>
      <h2>Shopping List</h2>
      <ul>
         {shoppingList.map((item) => (
            <li key={item} style={item === "Eggs" ? { textDecoration: "line-through" } : {}}>
               {item}
            </li>
         ))}
      </ul>
   </div>
)
}

export default ShoppingList
