import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType, usersDataType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

type MapStateToPropsType = {
    state: usersDataType[]
    pageSize: number
    totalCount: number
    currentPage: number
}

type MapDispatchToProps = {
    follow: (id: number)=>void
    unfollow: (id: number)=>void
    setUsers: (users: usersDataType[])=>void
    setCurrentPage: (currentPage: number)=>void
    setTotalCount: (totalCount: number) => void
}

export type MapToPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        state: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage: number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) =>{
            dispatch(setTotalCountAC(totalCount))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)