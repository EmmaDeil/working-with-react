import React from 'react'

const BookList = () => {
   
   const books = ["React Basics", "Learning TypeScript", "Advanced JavaScript"];

  return (
    <div>
      <ol>
         {books.map((book, index) => (
            <li key={index}>{book}</li>
         ))}
      </ol>
    </div>
  )
}

export default BookList
