import {combineReducers, createStore} from "redux";
import {
    AddPostActionType,
    profileReducer,
    SetUserProfileActionCreator,
    UpdateNewPostTextActionType
} from "./profileReducer";
import {AddMessageActionType, dialogsReducer, UpdateNewMessageTextActionType} from "./dialogsReducer";
import {
    FollowActionType,
    SetCurrentPageActionType, setTotalCountAC, SetTotalCountActionType,
    SetUsersActionType, ToggleIsFetchingActionType,
    UnfollowActionType,
    usersReducer
} from "./usersReducer";
import * as axios from "axios"
import {authReducer, setUserDataActionType} from "./authReducer";

export const instance = axios.default.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
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

export type profileType = null | {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string,
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type profilePageType = {
    profile: profileType
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
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}


export type RootStateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType | AddMessageActionType
    | FollowActionType | UnfollowActionType | SetUsersActionType
    | SetCurrentPageActionType | SetTotalCountActionType
    | ToggleIsFetchingActionType | SetUserProfileActionCreator
    | setUserDataActionType

export type StoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(reducers)

//@ts-ignore
window.store = store