import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "noteSlice",
    initialState: {
        noteList: [],
        searchTerm: '',
    },
    reducers: {
        setNoteList : (currentSlice, action)=> {
            currentSlice.noteList = action.payload
        },
        setSearchTerm : (currentSlice, action)=> {
            currentSlice.searchTerm = action.payload
        },
        deleteNote: (currentSlice, action) => {
            currentSlice.noteList = currentSlice.noteList.filter(note => note.id !== action.payload);
        },
        
    }
});

export const noteReducer = noteSlice.reducer

export const {setNoteList, deleteNote, setSearchTerm} = noteSlice.actions