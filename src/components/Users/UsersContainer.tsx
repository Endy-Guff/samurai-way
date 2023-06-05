import React from "react";
import {connect} from "react-redux";
import {StoreType, usersDataType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC, toggleIsFetchingAC, toggleIsFollowingAC,
    unfollowAC
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

export class UsersAPIComponent extends React.Component<UsersMapToPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
        .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }
    changePage = (p: number) =>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        usersAPI.getUsers(this.props.pageSize, p)
        .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
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
                      toggleIsFollowing={this.props.toggleIsFollowing}
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
        },
        toggleIsFetching: (isFetching: boolean) =>{
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleIsFollowing: (isFollowing: boolean, userId: number) =>{
            dispatch(toggleIsFollowingAC(isFollowing, userId))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)