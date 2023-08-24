import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './style.module.css'
import { useNavigate } from 'react-router-dom';

export const Note = () => {
    const navigate = useNavigate()
    const noteId  = useParams();
    const note = useSelector((store) =>
        store.NOTE.noteList.find((note) => note.id == noteId.id)
    );

    if (!note) {
        return <div>La note n'a pas été trouvée</div>;
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2>{note.title}</h2>
                <button className={style.btn} onClick={()=>navigate(`/note/edit/${noteId.id}`)}>Update</button>
            </div>
            <div className={style.date}>{note.created_at}</div>
            
            <p>{note.content}</p>
            
        </div>
    );
};

