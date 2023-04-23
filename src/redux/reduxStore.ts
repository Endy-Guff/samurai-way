import {combineReducers, createStore} from "redux";
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./profileReducer";
import {AddMessageActionType, dialogsReducer, UpdateNewMessageTextActionType} from "./dialogsReducer";

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

export type RootStateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageTextActionType | AddMessageActionType

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export const store = createStore(reducers)