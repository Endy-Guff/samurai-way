import React from 'react';
import s from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profileType, StoreType} from "../../redux/reduxStore";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {updateModalType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: profileType
    status: string
    isOwner: boolean
    savePhoto: (file: File)=>void
    updateStatus: (status: string) => void
    updateProfileInfo: (updateModal:updateModalType) => void
}

export const Profile: React.FC<ProfilePropsType> = (
    {
        profile,
        status,
        updateStatus,
        isOwner,
        savePhoto,
        updateProfileInfo
    }
) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
                         updateProfileInfo={updateProfileInfo}
            />
            <MyPostsContainer
            />
        </div>
    )
}