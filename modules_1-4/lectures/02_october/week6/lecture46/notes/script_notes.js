const noteInput = document.getElementById('note-input');
const addButton = document.getElementById('add-button');
const notesList= document.getElementById('notes-list');

addButton.addEventListener('click', function(){
    const noteText = noteInput.value;

    if(noteText.trim()!== ''){
        const li = document.createElement('li');
        li.textContent = noteText;
        notesList.appendChild(li);
        noteInput.value='';


    }
})