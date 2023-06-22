import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppDispatchType, StoreType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {getMeTC, logoutTC, setAuthUserDataAC} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerPropsType>{

    componentDidMount() {
        this.props.getMe()
    }

    render() {
        return <> <Header {...this.props}/> </>
    }
}

export type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType
type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchToPropsType = {
    getMe: () => void
    logOut: () => void
}

const MapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const MapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType =>{
    return{
        getMe: () =>{
            dispatch(getMeTC())
        },
        logOut: () =>{
            dispatch(logoutTC())
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(HeaderContainer)