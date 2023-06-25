import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppDispatchType, StoreType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {getMeTC, logoutTC, setAuthUserDataAC} from "../../redux/authReducer";
import {authAPI} from "../../api/api";
import {useNavigate} from "react-router-dom";


class HeaderContainer extends React.Component<HeaderContainerPropsType>{
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
        logOut: () =>{
            dispatch(logoutTC())
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(HeaderContainer)