import React from 'react';
import s from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profileType, StoreType} from "../../redux/reduxStore";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: profileType
    status: string
    updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (
    {
        profile,
        status,
        updateStatus
    }
) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer
            />
        </div>
    )
}