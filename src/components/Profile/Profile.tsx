import React from 'react';
import s from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profileType, StoreType} from "../../redux/reduxStore";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: profileType
}

export const Profile: React.FC<ProfilePropsType> = (
    {
        profile
    }
) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={profile} />
            <MyPostsContainer
            />
        </div>
    )
}