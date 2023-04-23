import {ActionsType, dialogsPageType, messagesDataType} from "./reduxStore";

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

const initialState: dialogsPageType = {
    newMessageText: '',
    dialogsData: [
        {id: 1, name: 'Andy'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Ivan'}
    ],
    messagesData: [
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Were are you?'}
    ]
}

export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsType): dialogsPageType => {
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
