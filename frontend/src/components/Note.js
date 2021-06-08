import ReactQuill from 'react-quill';
import dragIcon from '../img/drag32.png';
import { useEffect, useState } from 'react';


const Note = ({ note, onMove, onTitle, onEditBody }) => {
    const [noteBody, setNoteBody] = useState(""); 
    const [visibleEditor, setVisibleEditor] = useState("hideEditor"); 

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        setNoteBody(note.body);
    });

    const showEditor = () => {
        setVisibleEditor("");
    }

    const hideEditor = () => {
        setVisibleEditor("hideEditor");
    }

    return (
        <div className={`note ${note.color}`}
        style={{left: `${note.x + 2}px`, top: `calc(${note.y}px - 2em)`}}
        >   
            <img className="drag" src={dragIcon} alt="Drag Icon"  draggable="true"  onDragEnd={(e) => onMove(e, note.id)}/>
            
            <input className="title" type="text" name="title"  value={note.title} onChange={(e,id) => onTitle(e.target.value, note.id)}/>

            <ReactQuill className={visibleEditor} value={noteBody} onFocus={showEditor} onBlur={hideEditor}
            onChange={(value, id) => onEditBody(value, note.id)} />
        </div>
    )
}

export default Note;