import {ActionsType, dialogsPageType, messagesDataType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}

export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    text: string
}

export const addMessageActionType = (): AddMessageActionType => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextActionType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, text})

export const dialogsReducer = (state: dialogsPageType, action: ActionsType): dialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessageItem: messagesDataType = {
                id: 4,
                text: state.newMessageText
            }

            state.messagesData.push(newMessageItem)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state
        default:
            return state
    }
}
