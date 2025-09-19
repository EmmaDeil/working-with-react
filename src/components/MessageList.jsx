import React from 'react'

const MessageList = () => {
   const messages = [ "Hello!", "How are you?", "Don't forget the meeting at 10 AM." ]; // Empty array to demonstrate "No new messages" case

  return (
    <div>
      <h4>Task: If the array is empty, display "No new messages". Otherwise, show them in a list.</h4>
      {messages.length === 0 ? (
         <p>No new messages</p>
      ) : (
         <ul>
            {messages.map((msg, idx) => (
               <li key={idx}>{msg}</li>
            ))}
         </ul>
      )}
      <p>Remove the messages in the array and it displays the empty state.</p>
    </div>
  )
}

export default MessageList
