import {ActionsType, dialogsPageType, messagesDataType} from "./reduxStore";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    message: string
}

export const addMessageActionCreator = (message: string): AddMessageActionType => ({type: ADD_MESSAGE, message})

const initialState: dialogsPageType = {
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
                text: action.message
            }

            return {...state, messagesData: [...state.messagesData, newMessageItem]}
        default:
            return state
    }
}
