import React from 'react';
import {Profile} from "./Profile";
import { profileType, StoreType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setUserProfileActionCreator} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";

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
        profileAPI.getUser(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

type ProfileMapToPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    setUserProfile: (profile: profileType) => void
}
type MapStateToPropsType = {
    profile: profileType
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
        profile: state.profilePage.profile
    }
}

const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: (profile: profileType) => {
            dispatch(setUserProfileActionCreator(profile))
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(withRouter(ProfileContainer))
