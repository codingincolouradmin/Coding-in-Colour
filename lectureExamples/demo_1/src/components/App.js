import "../styles/App.css";
import Form from "./Form";
import Chat from "./Chat";
import { useState } from "react";

function App() {
  // Keeps track of our chat history
  const [chat, setChat] = useState(
    ["Hello, my name is John. What's yours?"]
  );

  // Keeps track of our message (what the user is typing in)
  const [message, setMessage] = useState("");
  
  // Handles changing our message when user types 
  function handleMessageChange(e) {
    e.preventDefault(); // prevent default action
    const newValue = e.target.value;
    setMessage(newValue);
  }

  // Handles updating our chat when user clicks button
  function handleAskClick(e) {
    e.preventDefault(); // prevent default action
    const newChat = [...chat, message]
    setChat(newChat);
    setMessage('');
  }

  return (
    <div className="App">
      <Chat chat={chat} />
      <Form
        message={message}
        onMessageChange={handleMessageChange}
        onAskClick={handleAskClick}
      />
    </div>
  );
}

// function Form(textInputValue, x, triggerAskButton)
// Form(textInputTemp, foo, handleAsk)

export default App;
