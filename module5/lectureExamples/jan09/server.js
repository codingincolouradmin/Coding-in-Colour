const express = require("express");
const app = express();
app.listen(3000);

let notes = [
    {
        id:1,
        content: "HTML is easy"
    },
    {
        id:2,
        content:" JavaScript is useful"
    }
]

app.get('/' ,(req,res) =>{
    res.status(500).send("you cant code");

})

app.get('/api' ,(req,res) =>{
    res.send("api endpoint");

})

app.post('/api/notes' ,(req,res) =>{
    const note = {
        id:"3",
        content:"hello"

    }

    res.json(note);

})
app.get('/api/notes/:id' ,(req,res) =>{
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id);
    res.json(note);

})  

app.delete('/api/notes/del/:id' ,(req,res) =>{
    const id = Number(req.params.id);
    const noteid = notes.find(note => note.id === id);
    const note1 = notes.filter(note => note.id != id)

    res.json(note1)


    
    

})
