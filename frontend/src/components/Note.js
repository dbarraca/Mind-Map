import dragIcon from '../img/drag32.png';
import closeIcon from '../img/close_icon.svg';
import { useEffect, useState, useRef } from 'react';
import NoteBody from './NoteBody';


const Note = ({ note, onMove, onTitle, onEditBody, onDelete }) => {
    const handleMove = (e, id) => {
        onMove(e.clientX, e.clientY, id);
    }

    const handleClose = () => {
        if(window.confirm(`Are you sure you want to delete this note titled "${note.title}"?`)) {
            onDelete(note._id);
        }
    }

    return (
        <div className={`note ${note.color}`}
        style={{left: `${note.x + 2}px`, top: `calc(${note.y}px - 2em)`}}>   
            <img className="drag" src={dragIcon} alt="Drag Icon"  draggable="true" onDragEnd={(e) => handleMove(e, note._id)}/>
            
            <div className="note-header">
                <input className="title" type="text" name="title"  defaultValue={note.title} onBlur={(e,id) => onTitle(e.target.value, note._id)}/>

                <img className="close" src={closeIcon} alt="Close Icon" onClick={() => handleClose()}/>
            </div>

            <NoteBody id={note._id} body={note.body} onEditBody={onEditBody} />                 
        </div>
    )
}

export default Note;