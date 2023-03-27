import React from 'react';
import s from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: profilePageType
}

export const Profile: React.FC<ProfilePropsType> = (
    {state}
) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postsData={state.postsData}/>
        </div>
    )
}