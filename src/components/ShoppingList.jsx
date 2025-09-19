import React from 'react'

const ShoppingList = () => {
   const shoppingList = ["Milk", "Bread", "Eggs", "Cheese", "Butter"];
return (
   <div>
      <h2>Shopping List</h2>
      <h4>Task: Render the list as listed items, but strike through "Eggs" to show it's already bought.</h4>
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
