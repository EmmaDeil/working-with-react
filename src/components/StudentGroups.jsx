import React from 'react'

const StudentGroups = () => {
   const students = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "B" },
  { id: 3, name: "Charlie", grade: "A" },
  { id: 4, name: "David", grade: "C" },
  { id: 5, name: "Eve", grade: "B" },
  { id: 6, name: "Frank", grade: "C" },
  { id: 7, name: "Grace", grade: "A" }
];

  return (
    <div>
      <h4>Task: Use reduce() to group students by grade, then render each group with a heading and a nested list of names.</h4>
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
