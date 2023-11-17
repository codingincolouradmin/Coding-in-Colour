import "../styles/App.css";
import Form from "./Form";
import Chat from "./Chat";
import { useState, useEffect } from "react";
import messageService from "../services/messageService";


function App() {
  // Keeps track of our chat history
  const [chat, setChat] = useState([]); // { id: "1", content: "Hello" }
  // Keeps track of our message (what the user is typing in)
  const [message, setMessage] = useState("");

  useEffect(() => {
    messageService.getMessages().then(data => setChat(data));
  }, [])
  
  // Handles changing our message when user types 
  function handleMessageChange(e) {
    e.preventDefault(); // prevent default action
    const newValue = e.target.value;
    setMessage(newValue);
  }

  // Handles updating our chat when user clicks button
  async function handleAskClick(e) {
    e.preventDefault(); // prevent default action
    messageService.createMessage(message).then(() => {
      setMessage('');
      messageService.getMessages().then(data => setChat(data));  // gets our updated messages
    })
  }

  async function handleDeleteClick(e, id) {
    e.preventDefault(); // prevent default action
    // deletes our message on mockAPI by id
    messageService.deleteMessage(id).then(() => {
      setMessage('');
      messageService.getMessages().then(data => setChat(data));  // gets our updated messages
    })
  }

  return (
    <div className="App">
      <Chat 
        chat={chat}
        onDeleteClick={handleDeleteClick}
      />
      <br></br>
      <Form
        message={message}
        onFormChange={handleMessageChange}
        onFormClick={handleAskClick}
      />
    </div>
  );
}

// function Form(textInputValue, x, triggerAskButton)
// Form(textInputTemp, foo, handleAsk)

export default App;
