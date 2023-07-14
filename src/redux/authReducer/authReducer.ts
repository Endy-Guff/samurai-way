import {ActionsType} from "../reduxStore";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {authAPI} from "../../api/authAPI";
import {securityAPI} from "../../api/securityAPI";

const initialState: authStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: authStateType = initialState, action: ActionsType): authStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data}
        case "SET-CAPTCHA":
            return {...state, captchaUrl: action.url}
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: null | number, email: null | string, login: null | string, isAuth: boolean) => (
    {type: 'SET-USER-DATA', data: {id, email, login, isAuth}} as const)

export const setCaptchaUrl = (url: string) => ({type: 'SET-CAPTCHA', url} as const)

export const getMeTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.getMe()
    if (res.resultCode === 0) {
        dispatch(setAuthUserDataAC(res.data.id, res.data.email, res.data.login, true))
    }
    if (res.resultCode === 1) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: Dispatch) => {
    const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        dispatch(getMeTC() as any)
    } else {
        if (res.data.resultCode===10){
            dispatch(getCaptcha() as any )
        }
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

export const getCaptcha = () => async (dispatch:Dispatch) =>{
    const res = await securityAPI.getCaptcha()
    dispatch(setCaptchaUrl(res.data.url))
}

// types

type authStateType = {
    id: null | number
    email: null | string
    login: null | string
    isFetching: boolean
    isAuth: boolean
    captchaUrl: null | string
}

export type setUserDataActionType = ReturnType<typeof setAuthUserDataAC>
export type setCaptchaUrlActionType = ReturnType<typeof setCaptchaUrl>