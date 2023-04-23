import React from "react";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../redux/reduxStore";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

type PropsType = {
    store: StoreType
}

export const DialogsContainer = (props: PropsType) =>{

    const state = props.store.getState()

    const addMessage = () =>{
        props.store.dispatch(addMessageActionCreator())
    }

    const updateNewMessageText = (text: string) =>{
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return <Dialogs state={state.dialogsPage}
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
    />
}