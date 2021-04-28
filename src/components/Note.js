import dragIcon from '../img/drag32.png';

const Note = ({ note, onDragEnd, onTitle }) => {
    return (
        <div className="note"
        style={{backgroundColor:note.color, left: `${note.x + 2}px `, top: `calc(${note.y}px - 2em)`}}
        >
            <img className="drag" src={dragIcon} alt="Drag Icon"  draggable="true"  onDragEnd={(e) => onDragEnd(e, note.id)}/>
            
            <input className="title" type="text" name="title"  value={note.title} onChange={(e,id) => onTitle(e.target.value, note.id)}></input>
        </div>
    )
}

export default Note;