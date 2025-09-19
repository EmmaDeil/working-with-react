import React from 'react'

const BookList = () => {

   const books = ["React Basics", "Learning TypeScript", "Advanced JavaScript", "Web Development with React", "Fullstack Development"];

  return (
    <div>
      <h4>Task: Render the books in an ordered list ordered list, with numbers automatically appearing before each title.</h4>
      <ol style={{ paddingLeft: "20px"}}>
         {books.map((book, index) => (
            <li key={index} style={{ color: index % 2 === 0 ? 'blue' : 'green', marginBottom: "15px" }}>{book}</li>
         ))}
      </ol>
    </div>
  )
}

export default BookList
