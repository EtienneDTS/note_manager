import React from 'react';
import style from "./style.module.css";
import trash from "../../assets/trash3.svg";
import { useNavigate } from 'react-router-dom';
import { NoteAPi } from '../../api/note-api';
import { deleteNote } from '../../store/note/note-slice';
import { useDispatch } from 'react-redux';

export const TextCard = ({ title, date, content, noteId, edited }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function clickNote() {
        navigate(`/note/${noteId}`);
    }


    function clickTrash(e) {
        e.stopPropagation();
        NoteAPi.deleteById(noteId)
        dispatch(deleteNote(noteId))
    }

    return (
        <div className={style.container} onClick={clickNote}>
            <div className={style.card_header}>
                <div className={style.title}>{title}</div>
                <div className={style.image} onClick={clickTrash}><img src={trash} alt="" /></div>
            </div>
            <div className={style.date}>Created on {date}</div>
            {edited && <div className={style.edited}>Edited on {edited}</div>}
            <div className={style.content}>{content}</div>

        </div>
    );
};
