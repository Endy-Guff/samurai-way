import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {AppDispatchType, profileType, StoreType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {getUserTC, setStatusTC, setUserProfileActionCreator, updateStatus} from "../../redux/profileReducer";
import {useNavigate, useParams} from "react-router-dom";
import {Navigate} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export function withRouter(Children: any){
    return(props: ProfileMapToPropsType)=>{
        const navigate = useNavigate()
        const match  = {params: useParams<{id: string}>()};
        return <Children {...props}  match = {match} navigate={navigate}/>
    }
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId =this.props.match.params.userId
        if (!userId&&this.props.userId) {
            userId = this.props.userId.toString()
        } else {
            this.props.navigate('/login')
        }
        debugger
        this.props.getUser(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

type ProfileMapToPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    getUser: (userId: string) => void
    updateStatus: (userId: string) => void
    getStatus: (userId: string) => void
}
type MapStateToPropsType = {
    profile: profileType
    isAuth: boolean
    status: string
    userId: number | null
}

type ParamsType = {
    match: {
        params: {
            userId: string
        }
    }
    navigate: (url: string)=> void
}

type ProfileContainerPropsType = ParamsType & ProfileMapToPropsType

const MapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        userId: state.auth.id
    }
}

const MapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        getUser: (userId: string) => {
            dispatch(getUserTC(userId))
        },
        updateStatus: (status: string) =>{
            dispatch(updateStatus(status))
        },
        getStatus: (userId: string) =>{
            dispatch(setStatusTC(userId))
    }
    }
}



export default compose<React.ComponentType>(
    connect(MapStateToProps, MapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
