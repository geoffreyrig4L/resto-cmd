import { selectAll, deleteNote } from "./notesSlice";
import { useSelector, useDispatch } from "react-redux";

const NotesList = () => {
  const notes = useSelector(selectAll);
  const dispatch = useDispatch();

  return (
    <ul id="my-notes">
      {notes.map((note, index) => (
        <div key={index} className="note">
          <i className="noteHeader">Note {index + 1}</i>
          <p>{note.content}</p>
          <button
            className="deleteNote"
            onClick={() => {
              dispatch(deleteNote(note.id));
            }}
          >
            X
          </button>
        </div>
      ))}
    </ul>
  );
};

export default NotesList;
