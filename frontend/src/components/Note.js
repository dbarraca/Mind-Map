import ReactQuill from 'react-quill';
import dragIcon from '../img/drag32.png';
import { useEffect, useState } from 'react';


const Note = ({ note, onMove, onTitle, onEditBody }) => {
    // const [body, setBody] = useState("test"); 
    const [visibleEditor, setVisibleEditor] = useState("hideEditor"); 

    const showEditor = () => {
        setVisibleEditor("");
    }

    const hideEditor = () => {
        setVisibleEditor("hideEditor");
    }

    return (
        <div className={`note ${note.color}`}
        style={{left: `${note.x + 2}px`, top: `calc(${note.y}px - 2em)`}}>   
            <img className="drag" src={dragIcon} alt="Drag Icon"  draggable="true"  onDragEnd={(e) => onMove(e, note._id)}/>
            
            <input className="title" type="text" name="title"  value={note.title} onChange={(e,id) => onTitle(e.target.value, note._id)}/>

            <div className={`quillWrap ${visibleEditor}`} >
                <ReactQuill value={note.body} onChange={(value, id) => onEditBody(value, note._id)} onFocus={showEditor} onBlur={hideEditor} 
                 modules={{
                    clipboard: {
                        matchVisual: false
                    }
                }}/>
            </div>
        </div>
    )
}

export default Note;