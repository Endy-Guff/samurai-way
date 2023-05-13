import {ActionsType, usersDataType, usersPageType} from "./reduxStore";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

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

export type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

export type SetTotalCountActionType = {
    type: 'SET-TOTAL-COUNT'
    totalCount: number
}

export const followAC = (id: number): FollowActionType =>({type: FOLLOW, id})
export const unfollowAC = (id: number): UnfollowActionType => ({type: UNFOLLOW, id})
export const setUsersAC = (users: usersDataType[]): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCountAC = (totalCount: number): SetTotalCountActionType => ({type: SET_TOTAL_COUNT, totalCount})

const initialState: usersPageType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1
}

export const usersReducer = (state: usersPageType = initialState, action: ActionsType): usersPageType => {
    switch (action.type){
        case FOLLOW:
            return  {...state, users: state.users.map(u=>u.id===action.id?{...u, followed: true}:u)}
        case UNFOLLOW:
            return  {...state, users: state.users.map(u=>u.id===action.id?{...u, followed: false}:u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        default: return state
    }
}