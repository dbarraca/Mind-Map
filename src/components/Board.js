import Note from './Note';

const Board = ({ notes, onDragEnd, onTitle }) => {

    const allowDrop = (e) =>{
        e.preventDefault();
    }

    const dropNote = (e) => {
        e.preventDefault();
        console.log("dropped in board");
    }

    return (
        <div className="board" onDrop={(e) => dropNote(e)} onDragOver={(e) => allowDrop(e)}>
            <h1 className="board-title">Board</h1>

            {notes.map((note) => (
                <Note key={note.id} note={note} onDragEnd={onDragEnd} onTitle={onTitle}/>
            ))}
        </div>
    );
}

export default Board;