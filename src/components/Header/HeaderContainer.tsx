import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import { StoreType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {setAuthUserDataAC} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerPropsType>{

    componentDidMount() {
        authAPI.getMe()
            .then(data=>{
                 if (data.resultCode===0){
                     return data.data
                 }
            })
            .then(data=> {
                this.props.setUserData(data.id, data.email, data.login)
            })
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
    setUserData: (userId: number, email: string, login: string) => void
}

const MapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>{
    return{
        setUserData: (userId: number, email: string, login: string) =>{
            dispatch(setAuthUserDataAC(userId, email, login))
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(HeaderContainer)