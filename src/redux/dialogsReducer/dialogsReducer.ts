import {ActionsType} from "../reduxStore";

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
        case 'ADD_MESSAGE':
            const newMessageItem: messagesDataType = {
                id: 4,
                text: action.message
            }
            return {...state, messagesData: [...state.messagesData, newMessageItem]}
        default:
            return state
    }
}

export const addMessageActionCreator = (message: string) => ({type: 'ADD_MESSAGE', message} as const)

// types

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>

export type dialogsPageType = {
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[]
}
export type dialogsDataType = {
    id: number,
    name: string
}

export type messagesDataType = {
    id: number,
    text: string
}