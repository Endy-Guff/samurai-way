import React from 'react'
import {addMessageActionCreator, dialogsPageType, dialogsReducer} from "./dialogsReducer";

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

it('new message should be added', ()=>{
    const action = addMessageActionCreator('hi!')

    const newState = dialogsReducer(initialState, action)

    expect(newState.messagesData.length).toBe(4)
})

it('text of new message should be correct', ()=>{
    const action = addMessageActionCreator('hi!')

    const newState = dialogsReducer(initialState, action)

    expect(newState.messagesData[3].text).toBe('hi!')
})

