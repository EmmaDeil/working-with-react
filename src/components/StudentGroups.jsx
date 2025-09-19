import React from 'react'

const StudentGroups = () => {
   const students = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "B" },
  { id: 3, name: "Charlie", grade: "A" },
  { id: 4, name: "David", grade: "C" }
];

  return (
    <div>
      {Object.entries(
         students.reduce((groups, student) => {
            (groups[student.grade] = groups[student.grade] || []).push(student);
            return groups;
         }, {})
      ).map(([grade, group]) => (
         <div key={grade}>
            <h3>Grade {grade}</h3>
            <ul>
               {group.map((student) => (
                  <li key={student.id}>{student.name}</li>
               ))}
            </ul>
         </div>
      ))}
    </div>
  )
}

export default StudentGroups
