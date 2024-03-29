import {ActionsType, StoreType} from "../reduxStore";
import {Dispatch} from "redux";
import {setError, setErrorMessage} from "../appReducer/appReducer";
import {profileAPI} from "../../api/profileAPI";
import {ResultCode} from "../../types/enums";

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
    switch (action.type) {
        case 'ADD_POST':
            const newPostItem: postsDataType = {
                id: 4,
                message: action.newPost,
                likesCount: 0
            }
            return {...state, postsData: [...state.postsData, newPostItem]}
        case 'DELETE-POST':
            return {...state, postsData: state.postsData.filter(el => el.id !== action.postId)}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'SET_STATUS':
            return {...state, status: action.status}
        case 'SET_PHOTOS':
            return <profilePageType>{...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export const addPostActionCreator = (newPost: string) => ({type: 'ADD_POST', newPost} as const)
export const setUserProfileActionCreator = (profile: profileType) => (
    {type: 'SET_USER_PROFILE', profile} as const)
export const deletePostActionCreator = (postId: number) => ({type: 'DELETE-POST', postId} as const)
export const setStatusAC = (status: string) => ({type: 'SET_STATUS', status} as const)
const setPhotoAC = (photos: { small: string, large: string }) => ({type: 'SET_PHOTOS', photos} as const)

export const getUserTC = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const data = await profileAPI.getUser(userId)
        dispatch(setUserProfileActionCreator(data))
    }
    catch (e:any) {
        dispatch(setError(true))
        dispatch(setErrorMessage(e.message))
    }

}
export const setStatusTC = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const data = await profileAPI.getStatus(userId)
        dispatch(setStatusAC(data))
    }
    catch (e:any) {
        dispatch(setError(true))
        dispatch(setErrorMessage(e.message))
    }
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    try {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === ResultCode.Success) {
            dispatch(setStatusAC(status))
        }
        if (data.resultCode === ResultCode.Error) {
            dispatch(setError(true))
            dispatch(setErrorMessage(data.messages[0]))
        }
    }
    catch (e:any) {
        dispatch(setError(true))
        dispatch(setErrorMessage(e.message))
    }

}

export const savePhotoTC = (file: File) => async (dispatch: Dispatch) => {
    try {
        const data = await profileAPI.savePhoto(file)
        if (data.resultCode === ResultCode.Success) {
            dispatch(setPhotoAC(data.data.photos))
        }
        if (data.resultCode === ResultCode.Error) {
            dispatch(setError(true))
            dispatch(setErrorMessage(data.messages[0]))
        }
    }
    catch (e:any) {
        dispatch(setError(true))
        dispatch(setErrorMessage(e.message))
    }

}

export const updateProfileInfoTC = (updateModal: updateModalType) => async (dispatch: Dispatch, getState: () => StoreType) => {
    const state = getState()
    const userId: string = state.auth.id as unknown as string

    const apiModal = {
        aboutMe: state.profilePage.profile!.aboutMe,
        userId: state.profilePage.profile!.userId,
        lookingForAJob: state.profilePage.profile!.lookingForAJob,
        lookingForAJobDescription: state.profilePage.profile!.lookingForAJobDescription,
        fullName: state.profilePage.profile!.lookingForAJobDescription,
        contacts: {
            github: state.profilePage.profile!.contacts.github,
            vk: state.profilePage.profile!.contacts.vk,
            facebook: state.profilePage.profile!.contacts.facebook,
            instagram: state.profilePage.profile!.contacts.instagram,
            twitter: state.profilePage.profile!.contacts.twitter,
            website: state.profilePage.profile!.contacts.website,
            youtube: state.profilePage.profile!.contacts.youtube,
            mainLink: state.profilePage.profile!.contacts.mainLink
        },
        ...updateModal
    }
    try {
        const data = await profileAPI.updateProfileInfo(apiModal)
        if (data.resultCode === ResultCode.Success){
            dispatch(getUserTC(userId) as any)
        }
        if (data.resultCode === ResultCode.Error){
            dispatch(setError(true))
            dispatch(setErrorMessage(data.messages[0]))
        }
    }
    catch (e:any) {
        dispatch(setError(true))
        dispatch(setErrorMessage(e.message))
    }

}

// types

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type deletePostActionType = ReturnType<typeof deletePostActionCreator>
export type SetUserProfileActionCreator = ReturnType<typeof setUserProfileActionCreator>
export type SetStatusActionType = ReturnType<typeof setStatusAC>
export type setPhotoActionType = ReturnType<typeof setPhotoAC>

export type updateModalType = {
    aboutMe?: string
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: updateModalContactType
}
export type updateModalContactType = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
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
    postsData: postsDataType[]
}

export type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}