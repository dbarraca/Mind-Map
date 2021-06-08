import Note from './Note';

const Board = ({ notes, onAdd, onMove, onTitle, onEditBody }) => {

    const allowDrop = (e) =>{
        e.preventDefault();
    }

    const dropNote = (e) => {
        e.preventDefault();
    }

    return (
        <div className="board" onDrop={(e) => dropNote(e)} onDragOver={(e) => allowDrop(e)} onDoubleClick={(e) => onAdd(e)}>
            <h1 className="board-title">Board</h1>
            
            {notes.map((note) => (
                <Note key={note.id} note={note} onMove={onMove} onTitle={onTitle} onEditBody={onEditBody}/>
            ))}
        </div>
    );
}

export default Board;