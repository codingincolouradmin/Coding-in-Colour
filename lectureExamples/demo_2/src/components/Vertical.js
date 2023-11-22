import "../styles/App.css";
import Form from "./form";
import Chat from "./chat";
import { useState, useEffect } from "react";
const API_KEY = "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";



function Vertical() {
  // Keeps track of our chat history
  const [chat, setChat] = useState(""); // { id: "1", content: "Hello" }
  // Keeps track of our message (what the user is typing in)
  const [message, setMessage] = useState([]);
  var name;
  var text;

  // user
  //assistant
  //system

  // useEffect(() => {
  //   messageService.getMessages().then(data => setChat(data));
  // }, [])
  
  // Handles changing our message when user types 
  function handleMessageChange(e) {
    e.preventDefault(); // prevent default action
    const newValue = e.target.value;
    name="user";
    text=newValue

    setChat(newValue);
  }

  async function processMessageToChatGPT(chatMessages){
    const systemMessage={
      "role": "system",
      "content": "You are a helpful assistant."
    }
    const apiRequestBody={
      "model": "gpt-3.5-turbo",
      "messages":[
        systemMessage,
        ...chatMessages
      ]
    }
    const response = await fetch("https://api.openai.com/v1/chat/completions",{
      method:"POST",
      headers:{
        "Authorization": "Bearer "+ API_KEY,
        "Content-Type": "application/json"
        

      },
      body: JSON.stringify(apiRequestBody)
    })
    const data = await response.json();
    const gptText = data.choices[0].message.content;
    console.log(gptText);
    setMessage([...chatMessages,{role:"assistant",content:gptText}])

  }

  // Handles updating our chat when user clicks button
  async function handleAskClick(e) {
    e.preventDefault(); // prevent default action
    console.log(text);
    const newMessage={
      role:"user",
      content:chat
    }
    const newMessages=[...message,newMessage];
    setMessage(newMessages);
    //console.log(message);

    await processMessageToChatGPT(newMessages);

   
   
  }

  // async function handleDeleteClick(e, id) {
  //   e.preventDefault(); // prevent default action
  //   // deletes our message on mockAPI by id
  //   messageService.deleteMessage(id).then(() => {
  //     setMessage('');
  //     messageService.getMessages().then(data => setChat(data));  // gets our updated messages
  //   })
  // }

  return (
    <div className="vert">
      <Chat 
        chat={message}
        
      />
      <br></br>
      <Form
        message={chat}
        onFormChange={handleMessageChange}
        onFormClick={handleAskClick}
      />
    </div>
  );
}

// function Form(textInputValue, x, triggerAskButton)
// Form(textInputTemp, foo, handleAsk)

export default Vertical;
