import {ActionsType, postsDataType, profilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    text: string
}

export const addPostActionCreator = (): AddPostActionType =>({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, text})

export const profileReducer = (state: profilePageType, action: ActionsType): profilePageType => {
    switch (action.type){
        case ADD_POST:
            const newPostItem: postsDataType = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }

            state.postsData.push(newPostItem)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state
        default: return state
    }
}