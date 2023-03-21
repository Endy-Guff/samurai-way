import React from 'react';
import s from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsDataType} from "../../App";

type ProfilePropsType = {
    postsData: postsDataType[]
}

export const Profile: React.FC<ProfilePropsType> = (
    {postsData}
) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postsData={postsData}/>
        </div>
    )
}