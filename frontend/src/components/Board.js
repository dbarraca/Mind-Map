import Note from './Note';

const Board = ({ notes, onAdd, onMove, onTitle, onEditBody, onDelete }) => {

    const allowDrop = (e) =>{
        e.preventDefault();
    }

    const dropNote = (e) => {
        e.preventDefault();
    }

    const handleDoubleClick = (e) => {
        e.preventDefault();

        let newNote = {
          title: "",
          body: "",
          color: "yellow",
          parentID: 0,
          x: e.clientX,
          y: e.clientY
        };

        onAdd({parentID: 0,  x: e.clientX,  y: e.clientY });

    }

    const notesOnBoard = notes !== null ? notes.map((note) => (
        <Note key={note._id} note={note} onMove={onMove} onTitle={onTitle} onEditBody={onEditBody} onDelete={onDelete}/>
    )) : null;

    return (
        <div className="board" onDrop={(e) => dropNote(e)} onDragOver={(e) => allowDrop(e)} onDoubleClick={(e) => handleDoubleClick(e)}>
            <h1 className="board-title">Board</h1>
            
            {notesOnBoard}
        </div>
    );
}

export default Board;