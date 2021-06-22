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
  const addNote = async (note) => {
    // console.log(note);
    const res = await fetch('http://localhost:5000/notes',
    {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(note)
    })

    const data = await res.json();

    setNotes([...notes, data]);
  }

  // Edit note body
  const updateNoteBody = async (value, id) => {
    const noteToUpdate = await fetchNote(id);
    const updatedNote = { ...noteToUpdate, body: value }

    const res = await fetch(`http://localhost:5000/notes/body/${id}`, 
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedNote)
    });

    const data = await res.json();

    setNotes(notes.map((note) => 
      note._id === data._id ? 
        {...note, body: data.body}
        : note
      )
    )
  }

  // Move note location in board
  const moveNote = async (x, y, id) => {
    const noteToMove = await fetchNote(id);
    const movedNote = { ...noteToMove, x: x, y: y }

    const res = await fetch(`http://localhost:5000/notes/position/${id}`, 
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(movedNote)
    })

    const data = await res.json();

    setNotes(notes.map((note) => 
      note._id === data._id ? 
        {...note, x: data.x, y: data.y}
        : note
      )
    )
  }

  // Title note
  const titleNote = async (title, id) => {
    const noteToTitle = await fetchNote(id);

    const titledNote = { ...noteToTitle, title: title }

    const res = await fetch(`http://localhost:5000/notes/title/${id}`, 
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(titledNote)
    })

    const data = await res.json();

    setNotes(notes.map((note) => 
     note._id === data._id ? 
      {...note, title: data.title }
      : note
     )
    )
  }

  // Delete note 
  const deleteNote = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, 
    {
      method: 'DELETE',
    })

    setNotes(notes.filter((note) => note._id !== id));  
  }

  return (
    <div className="App">
      <Board notes={notes} onAdd={addNote} onMove={moveNote} 
      onTitle={titleNote} onEditBody={updateNoteBody} onDelete={deleteNote}/>
    </div>
  );
};

export default App;
