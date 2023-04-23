import React, {useState} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {ActionsType, dialogsPageType,} from "../../redux/reduxStore";
import {addMessageActionType, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    state: dialogsPageType
    dispatch: (action: ActionsType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (
    {
        state,
        dispatch
    }
) => {


    const dialogsElement = state.dialogsData.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    })
    const messagesElement = state.messagesData.map(message => {
        return <MessagesItem message={message.text} key={message.id}/>
    })

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () =>{
        dispatch(addMessageActionType())
    }

    const newMessageHandler = () =>{
        if (newMessageElement.current){
            dispatch(updateNewMessageTextActionCreator(newMessageElement.current.value))
        }
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
                    <textarea className={s.textarea}
                              value={state.newMessageText}
                              ref={newMessageElement}
                              onChange={newMessageHandler}
                    />
                    <button className={s.button} onClick={addMessage}>add</button>
                </div>
            </div>
        </div>
    )
}