import React from "react";
import {MyPosts} from "./MyPosts";
import {postsDataType, StoreType} from "../../../redux/reduxStore";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    posts: postsDataType[],
    textValue: string
}

type MapDispatchToPropsType = {
    addPost: ()=>void
    changePostValue: (text: string)=>void
}

export type MyPostsMapPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        posts: state.profilePage.postsData,
        textValue: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>{
    return{
        addPost: ()=> {
            dispatch(addPostActionCreator())
        },
        changePostValue: (text: string)=>{
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
