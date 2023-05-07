import {combineReducers, createStore} from "redux";
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./profileReducer";
import {AddMessageActionType, dialogsReducer, UpdateNewMessageTextActionType} from "./dialogsReducer";
import {FollowActionType, SetUsersActionType, UnfollowActionType, usersReducer} from "./usersReducer";
import * as axios from "axios"

export const instance = axios.default.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers:     {
        "API-KEY": "cfa12c32-1348-432a-abcd-90b2663004a3"
    }
});

export type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type dialogsDataType = {
    id: number,
    name: string
}

export type messagesDataType = {
    id: number,
    text: string
}

export type profilePageType = {
    newPostText: string
    postsData: postsDataType[]
}

export type dialogsPageType = {
    newMessageText: string
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[]
}

type usersPhotosDataType = {
    small: string
    large: string
}

export type usersDataType = {
    name: string
    id: number
    photos: usersPhotosDataType
    status: string
    followed: boolean
}

export type usersPageType = {
    users: usersDataType[]
}


export type RootStateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType | AddMessageActionType
    | FollowActionType | UnfollowActionType | SetUsersActionType

export type StoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export const store = createStore(reducers)

//@ts-ignore
window.store = store