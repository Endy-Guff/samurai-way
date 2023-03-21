import React from "react";
import s from './MessagesItem.module.css'

type MessagesItemPropsType = {
    message: string
}

export const MessagesItem = (props: MessagesItemPropsType) => {
    return (
        <div className={s.messagesItem}>{props.message}</div>
    )
}