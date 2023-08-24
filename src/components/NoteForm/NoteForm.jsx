import React from 'react';
import style from './style.module.css';
import { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import { NoteAPi } from '../../api/note-api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNoteList } from "../../store/note/note-slice";


export const NoteForm = ({title, content, editing, noteId}) => {

    const [newTitle, setTitle] = useState(title);
    const [newContent, setContent] = useState(content);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        const newNote = {
            title: newTitle,
            content: newContent,
        };
        
        if (editing) {
            newNote.edited = new Date().toLocaleDateString()
            await NoteAPi.updateById({ id: noteId, ...newNote });
        } else {
            newNote.created_at = new Date().toLocaleDateString()
            const newId = uuidv4();
            newNote.id = newId
            await NoteAPi.create(newNote);
        }

        const updatedNoteList = await NoteAPi.fetchAll();
        dispatch(setNoteList(updatedNoteList)).then(navigate('/'))
        
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.form}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={newTitle ? newTitle : ''}
                    placeholder={editing ? "" : "Create a title"}
                    onChange={handleTitleChange}
                />
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    value={newContent ? newContent : ''}
                    onChange={handleContentChange}
                    placeholder={editing ? "" : "Add content"}
                />
                {editing == false ? <button type="submit">Create Note</button> : <button type="submit">Edit</button>}
            </form>

        </div>
    );
};
