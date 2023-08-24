import React from 'react';
import style from './style.module.css'
import icon from '../../assets/search-heart-fill.svg'

export const SearchBar = ({onType}) => {
    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={icon} alt="" />
            </div>
            <input type="text" onChange={(event)=>onType(event.target.value)}/>
            
        </div>
    );
};
