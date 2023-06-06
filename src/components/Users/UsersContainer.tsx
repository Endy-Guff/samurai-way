import React from "react";
import {connect} from "react-redux";
import {AppDispatchType, StoreType, usersDataType} from "../../redux/reduxStore";
import {AnyAction, Dispatch} from "redux";
import {
    followAC, followTC, getUsersTC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC, toggleIsFetchingAC, toggleIsFollowingAC,
    unfollowAC, unfollowTC
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

export class UsersAPIComponent extends React.Component<UsersMapToPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }
    changePage = (p: number) =>{
        this.props.setCurrentPage(p)
        this.props.getUsers(this.props.pageSize, p)
    }

    render() {
        return(
        <>
            {this.props.isFetching? <Preloader /> :null}
            <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      changePage={this.changePage}
                      users={this.props.state}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      followingProgress={this.props.followingProgress}
        />
        </>)
    }
}

type MapStateToPropsType = {
    state: usersDataType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}

type MapDispatchToProps = {
    follow: (id: number)=>void
    unfollow: (id: number)=>void
    setUsers: (users: usersDataType[])=>void
    setCurrentPage: (currentPage: number)=>void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetcing: boolean) => void
    toggleIsFollowing: (isFollowing: boolean, userId: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
}

export type UsersMapToPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        state: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToProps =>{
    return{
        follow: (id: number)=>{
            dispatch(followTC(id))
        },
        unfollow: (id: number)=>{
            dispatch(unfollowTC(id))
        },
        setUsers: (users: usersDataType[])=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) =>{
            dispatch(setTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) =>{
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleIsFollowing: (isFollowing: boolean, userId: number) =>{
            dispatch(toggleIsFollowingAC(isFollowing, userId))
        },
        getUsers: (pageSize: number, currentPage: number)=>{
            dispatch(getUsersTC(pageSize, currentPage))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)