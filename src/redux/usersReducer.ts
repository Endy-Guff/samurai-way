import {ActionsType, usersDataType, usersPageType} from "./reduxStore";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const initialState: usersPageType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

export const usersReducer = (state: usersPageType = initialState, action: ActionsType): usersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalCount: action.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-IS-FOLLOWING':
            return action.isFollowing
                ? {...state, followingProgress: [...state.followingProgress, action.userId]}
                : {...state, followingProgress: state.followingProgress.filter(id => id !== action.userId)}
        default:
            return state
    }
}

export const followAC = (id: number) => ({type: 'FOLLOW', id} as const)
export const unfollowAC = (id: number) => ({type: 'UNFOLLOW', id} as const)
export const setUsersAC = (users: usersDataType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) =>
    ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalCountAC = (totalCount: number) =>
    ({type: 'SET-TOTAL-COUNT', totalCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) =>
    ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleIsFollowingAC = (isFollowing: boolean, userId: number) =>
    ({type: 'TOGGLE-IS-FOLLOWING', isFollowing, userId} as const)


export const getUsersTC = (pageSize: number, currentPage: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    const data = await usersAPI.getUsers(pageSize, currentPage)
    dispatch(setUsersAC(data.items))
    dispatch(setTotalCountAC(data.totalCount))
    dispatch(toggleIsFetchingAC(false))
}

export const followTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingAC(true, userId))
    const data = await usersAPI.follow(userId)
    if (data.resultCode === 0) {
        dispatch(followAC(userId))
    }
    dispatch(toggleIsFollowingAC(false, userId))
}

export const unfollowTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingAC(true, userId))
    const data = await usersAPI.unfollow(userId)
    if (data.resultCode === 0) {
        dispatch(unfollowAC(userId))
    }
    dispatch(toggleIsFollowingAC(false, userId))
}

// types

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type SetTotalCountActionType = ReturnType<typeof setTotalCountAC>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetchingAC>
export type toggleIsFollowingActionType = ReturnType<typeof toggleIsFollowingAC>