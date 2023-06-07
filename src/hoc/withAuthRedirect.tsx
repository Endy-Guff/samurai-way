import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {RootStateType, StoreType} from "../redux/reduxStore";
import {Navigate} from "react-router-dom";

type mstpType = {
    isAuth: boolean
}

const mstp = (state: StoreType): mstpType =>{
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = <T, >(Component: ComponentType<T>) => {
    const RedirectComponent = (props: mstpType) =>{
        const {isAuth, ...restProps} = props
        if (!props.isAuth) return <Navigate to={'/login'} />
        return <Component {...restProps as T} />
    }

    return connect(mstp)(RedirectComponent)
};

