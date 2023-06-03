import {ActionsType} from "./reduxStore";

const SET_USER_DATA = 'SET-USER-DATA'

type authStateType = {
    id:null | number
    email:null | string
    login:null |  string
    isFetching: boolean
    isAuth: boolean
}

export type setUserDataActionType = ReturnType<typeof setAuthUserDataAC>

const initialState: authStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state: authStateType = initialState, action: ActionsType): authStateType =>{
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}

        default: return state
    }

}

export const setAuthUserDataAC = (id: number, email: string, login: string) =>{
    return{
        type: SET_USER_DATA,
        data:{
            id,
            email,
            login
        }
    } as const
}