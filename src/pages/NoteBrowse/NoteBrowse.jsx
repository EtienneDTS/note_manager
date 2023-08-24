import React from 'react';
import style from "./style.module.css";
import { TextCard } from '../../components/TextCard/TextCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { useState } from 'react';
import { setSearchTerm } from '../../store/note/note-slice';


export const NoteBrowse = () => {


    const noteList = useSelector(store => store.NOTE.noteList);
    const searchTerm = useSelector(store => store.NOTE.searchTerm);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(noteList);
    }, [noteList]);

    const filteredNotes = noteList.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
    

      function noteSearch(value) {
        dispatch(setSearchTerm(value)); 
    }


    return (
        <div className={style.main_container}>
            <div className={style.searchbar_container}><SearchBar onType={noteSearch}/></div>
            <div className={style.container}>
                {filteredNotes.map(note => (
                    <TextCard
                        key={note.id}
                        noteId={note.id}
                        title={note.title}
                        date={note.created_at}
                        content={note.content}
                        edited={note.edited}
                    />
                ))}
            </div>
        </div>
    );

};
