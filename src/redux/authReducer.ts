import {ActionsType} from "./reduxStore";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const initialState: authStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state: authStateType = initialState, action: ActionsType): authStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data}
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: null | number, email: null | string, login: null | string, isAuth: boolean) => (
    {type: 'SET-USER-DATA', data: {id, email, login, isAuth}} as const)

export const getMeTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.getMe()
    if (res.resultCode === 0) {
        dispatch(setAuthUserDataAC(res.data.id, res.data.email, res.data.login, true))
    }
    if (res.resultCode === 1) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getMeTC() as any)
    } else {
        const error = res.data.messages.length > 0 ? res.data.messages[0] : 'something wrong'
        dispatch(stopSubmit('login', {_error: error}))
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}

// types

type authStateType = {
    id: null | number
    email: null | string
    login: null | string
    isFetching: boolean
    isAuth: boolean
}

export type setUserDataActionType = ReturnType<typeof setAuthUserDataAC>