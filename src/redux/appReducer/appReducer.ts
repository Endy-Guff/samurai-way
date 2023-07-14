import {ActionsType} from "../reduxStore";
import {Dispatch} from "redux";
import {getMeTC} from "../authReducer/authReducer";

const initialState = {
    initialized: false,
    error: false,
    errorMessage: ''
}

export const appReducer = (state: appStateType = initialState, action: ActionsType): appStateType =>{
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        case 'SET-ERROR':
            return {...state, error: action.errorStatus}
        case "SET-ERROR-MESSAGE":
            return {...state, errorMessage: action.message}
        default: return state
    }
}

export const setInitialized = () =>({type: 'SET-INITIALIZED'} as const)
export const setError = (errorStatus: boolean) =>({type: 'SET-ERROR', errorStatus} as const)
export const setErrorMessage = (message: string) =>({type: 'SET-ERROR-MESSAGE', message} as const)

export const initializeApp = () => async (dispatch: Dispatch<any>)=>{
    const res = await Promise.all([dispatch(getMeTC())])
    if (res){
        dispatch(setInitialized())
    }
}

// types

type appStateType = typeof initialState
export type setInitializedACType = ReturnType<typeof setInitialized>
export type setErrorACType = ReturnType<typeof setError>
export type setErrorMessageACType = ReturnType<typeof setErrorMessage>
