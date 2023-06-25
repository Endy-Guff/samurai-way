import {ActionsType} from "./reduxStore";
import {Dispatch} from "redux";
import {getMeTC} from "./authReducer";

type appStateType = typeof initialState

const initialState = {
    initialized: false
}

export type setInitializedACType = ReturnType<typeof setInitialized>

export const appReducer = (state: appStateType = initialState, action: ActionsType): appStateType =>{
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        default: return state
    }
}

export const setInitialized = () =>({type: 'SET-INITIALIZED'} as const)

export const initializeApp = () => (dispatch: Dispatch<any>)=>{
    Promise.all([dispatch(getMeTC())])
        .then(()=> {
            dispatch(setInitialized())
        })
}