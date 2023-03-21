import React, {useState} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";

type dialogsDataType = {
    id: number,
    name: string
}

type messagesDataType = {
    id: number,
    text: string
}

export const Dialogs = () => {

    const [dialogsData, setDialogsData] = useState<dialogsDataType[]>([
        {id: 1, name: 'Andy'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Ivan'},
    ])

    const dialogsElement = dialogsData.map(dialog =>{
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    })

    const [messagesData, setMessagesData] = useState<messagesDataType[]>([
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Were are you?'},
    ])

    const messagesElement = messagesData.map(message => {
        return <MessagesItem message={message.text} key={message.id}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messagesItems}>
                {messagesElement}
            </div>
        </div>
    )
}