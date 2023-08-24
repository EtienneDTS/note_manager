import React from 'react';
import style from "./style.module.css"
import {NoteForm} from "../../components/NoteForm/NoteForm.jsx"

export const NoteCreate = () => {
    return (
        <div>
            <NoteForm editing={false} />
        </div>
    );
};

