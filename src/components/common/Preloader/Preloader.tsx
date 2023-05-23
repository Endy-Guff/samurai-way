import React from 'react';
import s from './Preloader.module.css'
import loader from "../../../assets/img/loader.gif";

export const Preloader = () => {
    return (
        <div className={s.wrapper}>
            <img src={loader} alt=""/>
        </div>
    );
};

