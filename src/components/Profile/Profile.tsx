import React from 'react';
import s from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/reduxStore";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    // store: StoreType,
}

export const Profile: React.FC<ProfilePropsType> = (
    {
        // store
    }
) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPostsContainer
            />
        </div>
    )
}