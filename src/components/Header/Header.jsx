import style from "./style.module.css"
import React from 'react';
import IconNote from "../../assets/IconNote.png"
import { useNavigate } from "react-router-dom";


export const Header = () => {
    const navigate = useNavigate()

    return (
        <div className={style.header}>
            <div className={style.company} onClick={()=>navigate("/")}>
                <div className={style.image}><img src={IconNote} alt="" /></div>
                <h3 className={style.title}>Notomatic</h3>
                <div className={style.jingle}>Manage your notes</div>
            </div>
            <div className={style.btn}>
                <button onClick={()=>navigate("/create")}>Add note +</button>
            </div>
            
        </div>
    );
};

