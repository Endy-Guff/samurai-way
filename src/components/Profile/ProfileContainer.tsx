import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {AppDispatchType, profileType, StoreType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {getUserTC, setUserProfileActionCreator} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {Navigate} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export function withRouter(Children: any){
    return(props: ProfileMapToPropsType)=>{

        const match  = {params: useParams<{id: string}>()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId =this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.getUser(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

type ProfileMapToPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    getUser: (userId: string) => void
}
type MapStateToPropsType = {
    profile: profileType
    isAuth: boolean
}

type ParamsType = {
    match: {
        params: {
            userId: string
        }
    }
}

type ProfileContainerPropsType = ParamsType & ProfileMapToPropsType

const MapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const MapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        getUser: (userId: string) => {
            dispatch(getUserTC(userId))
        }
    }
}



export default compose<React.ComponentType>(
    connect(MapStateToProps, MapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
