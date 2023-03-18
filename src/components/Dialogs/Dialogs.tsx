import React from "react";
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogItem}>Andy</div>
                <div className={s.dialogItem}>Valera</div>
                <div className={s.dialogItem}>Ivan</div>
            </div>
            <div className={s.messagesItems}>
                <div className={s.messagesItem}>Hi!</div>
                <div className={s.messagesItem}>How are you?</div>
                <div className={s.messagesItem}>Were are you?</div>
            </div>
        </div>
    )
}