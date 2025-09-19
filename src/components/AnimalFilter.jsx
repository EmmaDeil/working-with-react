import React from 'react'

const AnimalFilter = () => {
   const animals = ["Cat", "Dog", "Elephant", "Cow", "Eagle"];

  return (
    <div>
      <ul>
         {animals.filter(animal => animal.startsWith("E")).map(animal => (
            <li key={animal}>{animal}</li>
         ))}
      </ul>
    </div>
  )
}

export default AnimalFilter
