import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogItem}>
                    <NavLink to='/dialogs/1'>Andy</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to='/dialogs/2'>Valera</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to='/dialogs/3'>Ivan</NavLink>
                </div>
            </div>
            <div className={s.messagesItems}>
                <div className={s.messagesItem}>Hi!</div>
                <div className={s.messagesItem}>How are you?</div>
                <div className={s.messagesItem}>Were are you?</div>
            </div>
        </div>
    )
}