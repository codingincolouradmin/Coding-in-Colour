import { useState } from 'react';
import Notes from './Notes';
import Input from './Input';

function App() {
  const [notes, setNotes] = useState([
    
    {text:"Whats up", colour:""}
  ]);
  const [inputText, setInputText] = useState("");

  const updateTextInput = (e) => {
    e.preventDefault(); // Standard Practice
    const newValue = e.target.value;
    setInputText(newValue);
  }
 
  const addNote = (e) => {
    e.preventDefault() // Standard Practice
    const singleOb = {text:inputText, colour:""};
    const updatedArray = [...notes, singleOb];
    setNotes(updatedArray);
    setInputText('');

  }
  const [show, setShow] = useState(false);

  return (
    <div className="rootDiv">
      <h1 style={{textAlign:'center'}}>Notes app</h1>
      <div><Notes notes={notes} /></div>
      <div className='hiddenDiv'>
        {
          show && <Input text={inputText} handleUpdateText={updateTextInput}
          handleAddNote={addNote}/>
        }
        
      </div>
      
      <div className='circ' onClick={() => setShow(!show)}>

      </div>
    </div>
  );
}

export default App;