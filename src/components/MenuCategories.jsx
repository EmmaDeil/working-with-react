import React from 'react'

const MenuCategories = () => {

   const menu = [
  { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
  { category: "Vegetables", items: ["Carrot", "Spinach"] },
  { category: "Dairy", items: ["Milk", "Cheese", "Yogurt"] },
  { category: "Grains", items: ["Rice", "Bread", "Pasta"] }
];

  return (
    <div>
      <h4>Task: Display the categories as headings h3, and the items inside unordered lists.</h4>
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
