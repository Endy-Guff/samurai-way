import {ActionsType, usersDataType, usersPageType} from "./reduxStore";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type FollowActionType = {
    type: 'FOLLOW'
    id: number
}

export type UnfollowActionType = {
    type: 'UNFOLLOW'
    id: number
}

export type SetUsersActionType = {
    type: 'SET-USERS'
    users: usersDataType[]
}

export const followAC = (id: number): FollowActionType =>({type: FOLLOW, id})
export const unfollowAC = (id: number): UnfollowActionType => ({type: UNFOLLOW, id})
export const setUsersAC = (users: usersDataType[]): SetUsersActionType => ({type: SET_USERS, users})

const initialState: usersPageType = {
    users: []
}

export const usersReducer = (state: usersPageType = initialState, action: ActionsType): usersPageType => {
    switch (action.type){
        case FOLLOW:
            return  {...state, users: state.users.map(u=>u.id===action.id?{...u, followed: true}:u)}
        case UNFOLLOW:
            return  {...state, users: state.users.map(u=>u.id===action.id?{...u, followed: false}:u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default: return state
    }
}