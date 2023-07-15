import React, {useEffect, useState} from 'react';
import s from './Error.module.css'
import {connect} from "react-redux";
import {AppDispatchType, StoreType} from "../../../redux/reduxStore";
import {setError, setErrorMessage} from "../../../redux/appReducer/appReducer";

const Error = (props: ErrorPropsType) => {

    useEffect(() => {
        let timerId = setTimeout(() => {
            props.setError()
            props.setErrorMessage('')
        }, 7000)
        return () => clearTimeout(timerId)
    }, [])

    const finalClass = s.wrapper+(props.error?' '+s.active:'')

    return (
        <div className={finalClass}>
            <div className={s.error}>
                {props.errorMessage}
            </div>
        </div>
    );
};

type MSTPType = {
    error: boolean
    errorMessage: string
}
type MDTPType = {
    setError: () => void
    setErrorMessage: (message: string)=>void
}
type ErrorPropsType = MSTPType & MDTPType
const mstp = (state: StoreType): MSTPType => {
    return {
        error: state.app.error,
        errorMessage: state.app.errorMessage
    }
}
const mdtp = (dispatch: AppDispatchType): MDTPType => {
    return {
        setError: () => {
            dispatch(setError(false))
        },
        setErrorMessage: (message: string)=>{
            dispatch(setErrorMessage(message))
        }
    }
}

export default connect(mstp, mdtp)(Error)
