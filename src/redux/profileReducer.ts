import {ActionsType, postsDataType, profilePageType, profileType} from "./reduxStore";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {stat} from "fs";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    text: string
}

export type SetUserProfileActionCreator = {
    type: 'SET_USER_PROFILE'
    profile: profileType
}

export type SetStatusActionType = {
    type: 'SET_STATUS'
    status: string
}

export const addPostActionCreator = (): AddPostActionType =>({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, text})
export const setUserProfileActionCreator = (profile: profileType): SetUserProfileActionCreator =>{
    return {type: SET_USER_PROFILE, profile}
}
export const setStatusAC = (status: string): SetStatusActionType =>
    ({type: SET_STATUS, status})

export const getUserTC = (userId: string) => (dispatch: Dispatch) =>{
    profileAPI.getUser(userId)
        .then(data => {
            dispatch(setUserProfileActionCreator(data))
        })
}
export const setStatusTC = (userId: string) => (dispatch: Dispatch) =>{
    profileAPI.getStatus(userId)
        .then(data=>{
            dispatch(setStatusAC(data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) =>{
    profileAPI.updateStatus(status)
        .then(data=>{
            if (data.resultCode === 0){
                dispatch(setStatusAC(status))
            }
        })
}

const initialState: profilePageType = {
    profile: null,
    status: '',
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
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default: return state
    }
}