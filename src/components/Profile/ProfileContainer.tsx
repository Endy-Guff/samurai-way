import React from 'react';
import {Profile} from "./Profile";
import {AppDispatchType, profileType, StoreType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {getUserTC, setUserProfileActionCreator} from "../../redux/profileReducer";
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

const MapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        getUser: (userId: string) => {
            dispatch(getUserTC(userId))
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(withRouter(ProfileContainer))
