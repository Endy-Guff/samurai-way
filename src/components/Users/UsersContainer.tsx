import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType, usersDataType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

type MapStateToPropsType = {
    state: usersDataType[]
}

type MapDispatchToProps = {
    follow: (id: number)=>void
    unfollow: (id: number)=>void
    setUsers: (users: usersDataType[])=>void
}

export type MapToPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        state: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps =>{
    return{
        follow: (id: number)=>{
            dispatch(followAC(id))
        },
        unfollow: (id: number)=>{
            dispatch(unfollowAC(id))
        },
        setUsers: (users: usersDataType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)