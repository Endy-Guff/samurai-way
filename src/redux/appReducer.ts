import {ActionsType} from "./reduxStore";
import {Dispatch} from "redux";
import {getMeTC} from "./authReducer";

const initialState = {
    initialized: false
}

export const appReducer = (state: appStateType = initialState, action: ActionsType): appStateType =>{
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        default: return state
    }
}

export const setInitialized = () =>({type: 'SET-INITIALIZED'} as const)

export const initializeApp = () => async (dispatch: Dispatch<any>)=>{
    const res = await Promise.all([dispatch(getMeTC())])
    if (res){
        dispatch(setInitialized())
    }
}

// types

type appStateType = typeof initialState
export type setInitializedACType = ReturnType<typeof setInitialized>
