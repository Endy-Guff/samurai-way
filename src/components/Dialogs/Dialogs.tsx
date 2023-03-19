import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string,
    id: number
}

type MessagesItemPropsType = {
    messages: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessagesItem = (props: MessagesItemPropsType) => {
    return (
        <div className={s.messagesItem}>props.message</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Andy' id={1}/>
                <DialogItem name='Valera' id={2}/>
                <DialogItem name='Ivan' id={3}/>
            </div>
            <div className={s.messagesItems}>
                <div className={s.messagesItem}>Hi!</div>
                <div className={s.messagesItem}>How are you?</div>
                <div className={s.messagesItem}>Were are you?</div>
            </div>
        </div>
    )
}