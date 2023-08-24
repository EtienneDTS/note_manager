import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {NoteForm} from '../../components/NoteForm/NoteForm.jsx'


export const EditNote = () => {
    const noteId  = useParams();
    const note = useSelector((store) =>
        store.NOTE.noteList.find((note) => note.id == noteId.id)
    );

    return (
        <div>
            <NoteForm editing={true} title={note.title} content={note.content} noteId = {note.id}/>
        </div>
    );
};

