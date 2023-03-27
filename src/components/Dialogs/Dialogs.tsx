import React, {useState} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {dialogsDataType, dialogsPageType, messagesDataType} from "../../redux/state";

type DialogsPropsType = {
    state: dialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = ({state}) => {


    const dialogsElement = state.dialogsData.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    })
    const messagesElement = state.messagesData.map(message => {
        return <MessagesItem message={message.text} key={message.id}/>
    })

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () =>{
        const text = newMessageElement.current?.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messagesItems}>
                <div className={s.messagesItemsBox}>
                    {messagesElement}
                </div>
                <div className={s.textareaBox}>
                    <textarea className={s.textarea} ref={newMessageElement}></textarea>
                    <button className={s.button} onClick={addMessage}>add</button>
                </div>
            </div>
        </div>
    )
}