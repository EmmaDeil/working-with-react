import React from 'react'

const AnimalFilter = () => {
   const animals = ["Cat", "Dog", "Elephant", "Cow", "Eagle"];

  return (
    <div>
      <h4>Task: Only render animals that start with the letter "E".</h4>
      <ul>
         {animals.filter(animal => animal.startsWith("E")).map(animal => (
            <li key={animal}>{animal}</li>
         ))}
      </ul>
    </div>
  )
}

export default AnimalFilter
