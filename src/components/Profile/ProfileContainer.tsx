import React from 'react';
import {Profile} from "./Profile";
import {instance, profileType, StoreType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setUserProfileActionCreator} from "../../redux/profileReducer";

class ProfileContainer extends React.Component<ProfileMapToPropsType> {

    componentDidMount() {
        instance
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
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

export default connect(MapStateToProps, MapDispatchToProps)(ProfileContainer)
