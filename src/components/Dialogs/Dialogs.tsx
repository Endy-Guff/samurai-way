import React, {useState} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {dialogsDataType, messagesDataType} from "../../App";

type DialogsPropsType = {
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[]
}

export const Dialogs: React.FC<DialogsPropsType> = ({
                                                        dialogsData,
                                                        messagesData
}) => {


    const dialogsElement = dialogsData.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    })
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