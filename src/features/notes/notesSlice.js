import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const noteAdapter = createEntityAdapter();

const notesSlice = createSlice({
  name: "notes",
  initialState: noteAdapter.getInitialState(),
  reducers: {
    addNote: noteAdapter.addOne,
    deleteNote: noteAdapter.removeOne,
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;
export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  noteAdapter.getSelectors((state) => state.notes);
export default notesSlice.reducer;
