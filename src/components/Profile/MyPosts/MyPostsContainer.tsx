import React from "react";
import {MyPosts} from "./MyPosts";
import {postsDataType, StoreType} from "../../../redux/reduxStore";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    posts: postsDataType[],
}

type MapDispatchToPropsType = {
    addPost: (newPost: string)=>void
}

export type MyPostsMapPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        posts: state.profilePage.postsData,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>{
    return{
        addPost: (newPost: string)=> {
            dispatch(addPostActionCreator(newPost))
        },
    }
}
console.log('render')

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
