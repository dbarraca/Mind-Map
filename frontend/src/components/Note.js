import { Editor } from '@tinymce/tinymce-react';
import dragIcon from '../img/drag32.png';
import closeIcon from '../img/close_icon.svg';
import { useEffect, useState, useRef } from 'react';


const Note = ({ note, onMove, onTitle, onEditBody, onDelete }) => {
    // const editorRef = useRef(null);

    // const showEditor = () => {
    //     setVisibleEditor("");
    // }

    // const hideEditor = () => {
    //     setVisibleEditor("hideEditor");
    // }
   
    // const log = () => {
    //   if (editorRef.current) {
    //     console.log(editorRef.current.getContent());
    //   }
    // };

    const handleMove = (e, id) => {
        onMove(e.clientX, e.clientY, id);
    }

    const handleHideEditor = () => {
        // tinymce.get(`#Editor_${note._id}`).hide();
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
                <input className="title" type="text" name="title"  value={note.title} onChange={(e,id) => onTitle(e.target.value, note._id)}/>

                <img className="close" src={closeIcon} alt="Close Icon" onClick={() => handleClose()}/>
            </div>

            <Editor
                tinymceScriptSrc="./public/tinymce/tinymce.min.js" 
                id={`Editor_${note._id}`}
                // onInit={(evt, editor) => editorRef.current = editor}
                init={{
                height: "150",
                menubar: false,
                toolbar: false,                
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                value={note.body}
                onEditorChange={(value, id) => onEditBody(value, note._id)}
            />            
        </div>
    )
}

export default Note;