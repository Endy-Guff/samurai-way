import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {DialogsMapProps} from "./DialogsContainer";
import {Navigate} from "react-router-dom";

export const Dialogs: React.FC<DialogsMapProps> = (
    {
        state,
        addMessage,
        updateNewMessageText,
        isAuth
    }
) => {


    const dialogsElement = state.dialogsData.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    })
    const messagesElement = state.messagesData.map(message => {
        return <MessagesItem message={message.text} key={message.id}/>
    })

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessageHandler = () =>{
        addMessage()
    }

    const newMessageHandler = () =>{
        if (newMessageElement.current){
            const text = newMessageElement.current.value
                updateNewMessageText(text)
        }
    }

    if (!isAuth) return <Navigate to={'/login'} />

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
                    <textarea className={s.textarea}
                              value={state.newMessageText}
                              ref={newMessageElement}
                              onChange={newMessageHandler}
                    />
                    <button className={s.button} onClick={addMessageHandler}>add</button>
                </div>
            </div>
        </div>
    )
}