import {ActionsType, usersDataType, usersPageType} from "./reduxStore";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING'

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

export type ToggleIsFetchingActionType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}

export type toggleIsFollowingActionType = {
    type: 'TOGGLE-IS-FOLLOWING',
    isFollowing: boolean
    userId: number
}

export const followAC = (id: number): FollowActionType =>({type: FOLLOW, id})
export const unfollowAC = (id: number): UnfollowActionType => ({type: UNFOLLOW, id})
export const setUsersAC = (users: usersDataType[]): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCountAC = (totalCount: number): SetTotalCountActionType => ({type: SET_TOTAL_COUNT, totalCount})
export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingAC = (isFollowing: boolean, userId: number): toggleIsFollowingActionType => {
    return {type: TOGGLE_IS_FOLLOWING, isFollowing, userId}
}
const initialState: usersPageType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
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
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING:
            return action.isFollowing
                ?{...state, followingProgress: [...state.followingProgress, action.userId]}
                :{...state, followingProgress: state.followingProgress.filter(id=>id!==action.userId)}
        default: return state
    }
}