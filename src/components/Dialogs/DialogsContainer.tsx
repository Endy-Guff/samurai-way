import React from "react";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../redux/reduxStore";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {StoreContext} from "../../StoreContext";

type PropsType = {
    // store: StoreType
}

export const DialogsContainer = (props: PropsType) => {



    return <StoreContext.Consumer>
        {store => {
            const state = store.getState()

            const addMessage = () => {
                store.dispatch(addMessageActionCreator())
            }

            const updateNewMessageText = (text: string) => {
                store.dispatch(updateNewMessageTextActionCreator(text))
            }
            return <Dialogs state={state.dialogsPage}
                            addMessage={addMessage}
                            updateNewMessageText={updateNewMessageText}
            />
        }
        }
    </StoreContext.Consumer>
}