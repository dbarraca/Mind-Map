import { useState, useEffect } from 'react';
import Board from './components/Board'
import './App.css';

function App() {
  const [ notes, setNotes ] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const NotesFromServer = await fetchNotes();

      setNotes(NotesFromServer);
    }

    getNotes();
  }, []);

  // Fetch note
  const fetchNote = async (id) => {
    const res = await fetch(`http://localhost:5000/notes/${id}`);
    const data = await res.json();

    return data;
  }

   // Fetch notes
  const fetchNotes = async () => {
    const res = await fetch('http://localhost:5000/notes');
    const data = await res.json();

    return data;
  }

  // Add new note 
  const addNote = async (e) => {
    const noteCount = fetchNotes().length;

    const addedNote = {
      id: noteCount + 1,
      title: "",
      body: "",
      color: "yellow",
      parentId: 0,
      x: e.clientX,
      y: e.clientY
    };

    const res = await fetch(`http://localhost:5000/notes`,
    {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(addedNote)
    })

    const data = await res.json();

    setNotes([...notes, data]);
  }

  // Edit note body
  const updateNoteBody = async (value, id) => {
    const noteToUpdate = await fetchNote(id);
    const updatedNote = {...noteToUpdate, body: value }

    const data = await fetch(`http://localhost:5000/notes/${id}`, 
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedNote)
    });

    setNotes(notes.map((note) => 
      note.id === data.id ? 
        {...noteToUpdate, body: value}
        : note
      )
    )
  }

  // Move note location in board
  const moveNote = async (e, id) => {
    const noteToMove = await fetchNote(id);
    const movedNote = { ...noteToMove, x: e.clientX, y: e.clientY }

    const res = await fetch(`http://localhost:5000/notes/${id}`, 
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(movedNote)
    })

    const data = await res.json();

    setNotes(notes.map((note) => 
      note.id === data.id ? 
        {...note, x: data.x, y: data.y}
        : note
      )
    )
  }

  // Title note
  const titleNote = async (title, id) => {
    const noteToTitle = await fetchNote(id);

    const titledNote = { ...noteToTitle, title: title }

    const res = await fetch(`http://localhost:5000/notes/${id}`, 
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(titledNote)
    })

    const data = await res.json();

    setNotes(notes.map((note) => 
     note.id === data.id ? 
      {...note, title: data.title }
      : note
     )
    )
  }

  return (
    <div className="App">
      <Board notes={notes} onAdd={addNote} onMove={moveNote} onTitle={titleNote} onEditBody={updateNoteBody}/>
    </div>
  );
};

export default App;
