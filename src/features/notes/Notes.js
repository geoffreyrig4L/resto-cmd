import { useDispatch } from "react-redux";
import { addNote } from "./notesSlice";
import NotesList from "./NotesList";

const Notes = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addNote({ id: crypto.randomUUID(), content: event.target.note.value })
    );
  };

  return (
    <div>
      <h1>Mes notes</h1>
      <form id="note-form" onSubmit={handleSubmit}>
        <label>Ajouter une note</label>
        <textarea
          id="note"
          name="note"
          rows="5"
          cols="33"
          placeholder="Entrez votre note ici"
        />
        <button type="submit">Ajouter</button>
      </form>
      <NotesList />
    </div>
  );
};

export default Notes;
