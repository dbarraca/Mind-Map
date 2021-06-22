import Note from './Note';

const Board = ({ notes, onAdd, onMove, onTitle, onEditBody, onDelete }) => {

    const allowDrop = (e) =>{
        e.preventDefault();
    }

    const dropNote = (e) => {
        e.preventDefault();
    }

    const handleDoubleClick = (e) => {
        // e.preventDefault();
        console.log(e.clientX);

        /*
        const addedNote = {
            title: "",
            body: "",
            color: "yellow",
            parentId: 0,
            x: e.clientX,
            y: e.clientY
        };*/

        let newNote = {
          title: "",
          body: "",
          color: "yellow",
          parentID: 0,
          x: e.clientX,
          y: e.clientY
        };

        onAdd({parentID: 0,  x: e.clientX,  y: e.clientY });
        // onAdd({
        //     title: "",
        //     body: "",
        //     color: "yellow",
        //     parentID: 0,
        //     x: e.clientX,
        //     y: e.clientY
        //   });
        // onAdd(newNote);
    }

    return (
        <div className="board" onDrop={(e) => dropNote(e)} onDragOver={(e) => allowDrop(e)} onDoubleClick={(e) => handleDoubleClick(e)}>
            <h1 className="board-title">Board</h1>
            
            {notes.map((note) => (
                <Note key={note._id} note={note} onMove={onMove} onTitle={onTitle} onEditBody={onEditBody} onDelete={onDelete}/>
            ))}
        </div>
    );
}

export default Board;