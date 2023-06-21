import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {
    AddPostActionType,
    profileReducer, SetStatusActionType,
    SetUserProfileActionCreator,
    UpdateNewPostTextActionType
} from "./profileReducer";
import {AddMessageActionType, dialogsReducer, UpdateNewMessageTextActionType} from "./dialogsReducer";
import {
    FollowActionType,
    SetCurrentPageActionType, setTotalCountAC, SetTotalCountActionType,
    SetUsersActionType, ToggleIsFetchingActionType, toggleIsFollowingActionType,
    UnfollowActionType,
    usersReducer
} from "./usersReducer";
import {authReducer, setUserDataActionType} from "./authReducer";
import thunk from "redux-thunk";
import {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {reducer as formReducer} from 'redux-form'

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
    status: string
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
    followingProgress: number[]
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
    | setUserDataActionType | toggleIsFollowingActionType
    | SetStatusActionType

export type StoreType = ReturnType<typeof reducers>
export type AppDispatchType = ThunkDispatch<StoreType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>()

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store