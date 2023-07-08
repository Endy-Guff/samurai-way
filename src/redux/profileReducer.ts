import {ActionsType, postsDataType, profilePageType, profileType} from "./reduxStore";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {stat} from "fs";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type deletePostActionType = ReturnType<typeof deletePostActionCreator>
export type SetUserProfileActionCreator = ReturnType<typeof setUserProfileActionCreator>
export type SetStatusActionType = ReturnType<typeof setStatusAC>

export const addPostActionCreator = (newPost: string) =>({type: 'ADD_POST',newPost} as const)
export const setUserProfileActionCreator = (profile: profileType) =>(
    {type: 'SET_USER_PROFILE', profile} as const)
export const deletePostActionCreator = (postId: number) => ({type: 'DELETE-POST', postId} as const)
export const setStatusAC = (status: string) => ({type: 'SET_STATUS', status} as const)

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
    postsData: [
        {id: 1, message: 'Post 1', likesCount: 2},
        {id: 2, message: 'Post 3', likesCount: 4},
        {id: 3, message: 'Post 3', likesCount: 3},
    ]
}

export const profileReducer = (state: profilePageType = initialState, action: ActionsType): profilePageType => {
    switch (action.type){
        case 'ADD_POST':
            const newPostItem: postsDataType = {
                id: 4,
                message: action.newPost,
                likesCount: 0
            }
            return {...state, postsData: [...state.postsData, newPostItem]}
        case 'DELETE-POST':
            return {...state, postsData: state.postsData.filter(el=>el.id!==action.postId)}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'SET_STATUS':
            return {...state, status: action.status}
        default: return state
    }
}