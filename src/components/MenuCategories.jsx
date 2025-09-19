import React from 'react'

const MenuCategories = () => {

   const menu = [
  { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
  { category: "Vegetables", items: ["Carrot", "Spinach"] }
];

  return (
    <div>
      {menu.map(({ category, items }) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default MenuCategories;
