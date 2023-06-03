import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {instance, StoreType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {setAuthUserDataAC} from "../../redux/authReducer";

class HeaderContainer extends React.Component<HeaderContainerPropsType>{

    componentDidMount() {
        instance.get('https://social-network.samuraijs.com/api/1.0/auth/me')
            .then(res=>{
                 if (res.data.resultCode===0){
                     return res.data.data
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