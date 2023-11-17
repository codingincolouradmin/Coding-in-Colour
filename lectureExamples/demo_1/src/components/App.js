import "../styles/App.css";
import Form from "./Form";
import Chat from "./Chat";
import { useState, useEffect } from "react";
import axios from 'axios';
import config from "../services/config.json";

function App() {
  // Keeps track of our chat history
  const [chat, setChat] = useState([]); // { id: "1", content: "Hello" }
  // Keeps track of our message (what the user is typing in)
  const [message, setMessage] = useState("");
  console.log('rendering...');

  useEffect(() => {
    getMessages();
  }, [])

  const getMessages = async () => {
    const response =  await axios.get(`https://${config.apiKey}.mockapi.io/messages`);
    setChat(response.data);
  }

  const createMessage = async (message) => {
    await axios.post(`https://${config.apiKey}.mockapi.io/messages`, {content: message});
  }

  const deleteMessage = async (id) => {
    await axios.delete(`https://${config.apiKey}.mockapi.io/messages/${id}`);
  }
  
  // Handles changing our message when user types 
  function handleMessageChange(e) {
    e.preventDefault(); // prevent default action
    const newValue = e.target.value;
    setMessage(newValue);
  }

  // Handles updating our chat when user clicks button
  async function handleAskClick(e) {
    e.preventDefault(); // prevent default action
    await createMessage(message); // adds a message to the mockAPI
    setMessage('');
    await getMessages(); // gets our updated messages
  }

  async function handleDeleteClick(e, id) {
    e.preventDefault(); // prevent default action
    await deleteMessage(id); // deletes our message on mockAPI by id
    await getMessages(); // gets our updated messages
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
