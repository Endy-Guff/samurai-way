import React from "react";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/reduxStore";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

type PropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: PropsType) =>{

    const state = props.store.getState()

    const addPost = () =>{
        props.store.dispatch(addPostActionCreator())
    }

    const changePostValue = (text: string) =>{
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return <MyPosts posts={state.profilePage.postsData}
                    textValue={state.profilePage.newPostText}
                    addPost={addPost}
                    changePostValue={changePostValue}
    />
}