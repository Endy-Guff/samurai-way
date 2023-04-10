import React from 'react';
import s from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: profilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (
    {
        state,
        addPost,
        updateNewPostText
    }
) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postsData={state.postsData}
                     textValue={state.newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
            />
        </div>
    )
}