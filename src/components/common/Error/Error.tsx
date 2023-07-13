import React, {useEffect, useState} from 'react';
import s from './Error.module.css'
import {connect} from "react-redux";
import {AppDispatchType, StoreType} from "../../../redux/reduxStore";
import {setError} from "../../../redux/appReducer";

const Error = (props: ErrorPropsType) => {

    useEffect(() => {
        let timerId = setTimeout(() => {
            props.setError()
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
        }
    }
}

export default connect(mstp, mdtp)(Error)
