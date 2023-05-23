import React from "react";
import {connect} from "react-redux";
import {instance, StoreType, usersDataType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export class UsersAPIComponent extends React.Component<MapToPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        instance
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }
    changePage = (p: number) =>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        instance
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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
}

type MapDispatchToProps = {
    follow: (id: number)=>void
    unfollow: (id: number)=>void
    setUsers: (users: usersDataType[])=>void
    setCurrentPage: (currentPage: number)=>void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetcing: boolean) => void
}

export type MapToPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        state: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)