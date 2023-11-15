import "./App.css";
import Form from "./form";
import Chat from "./chat";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState(
    "Hello, my name is John, What is your name?"
  );

  // capture input values
  const [textInputTemp, setTextInput] = useState("");
  function updateInputText(e) {
    const newValue = e.target.value;
    setTextInput(newValue);
  }

  // button click
  function handleAsk(e) {
    // any operations
    setMessages(textInputTemp);
  }

  return (
    <div className="App">
      <Chat chat1={messages} />
      <Form
        textInputValue={textInputTemp}
        triggerInputChange={updateInputText}
        triggerAskButton={handleAsk}
      />
    </div>
  );
}

export default App;
