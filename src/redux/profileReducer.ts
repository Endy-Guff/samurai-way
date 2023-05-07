import {ActionsType, postsDataType, profilePageType} from "./reduxStore";

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

const initialState: profilePageType = {
    newPostText: '',
    postsData: [
        {id: 1, message: 'Post 1', likesCount: 2},
        {id: 2, message: 'Post 3', likesCount: 4},
        {id: 3, message: 'Post 3', likesCount: 3},
    ]
}

export const profileReducer = (state: profilePageType = initialState, action: ActionsType): profilePageType => {
    switch (action.type){
        case ADD_POST:
            const newPostItem: postsDataType = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }

            return {...state, newPostText: '', postsData: [...state.postsData, newPostItem]}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.text}
        default: return state
    }
}