import React from 'react';
import s from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, profilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: profilePageType
    dispatch: (action: ActionsType) => void
}

export const Profile: React.FC<ProfilePropsType> = (
    {
        state,
        dispatch
    }
) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postsData={state.postsData}
                     textValue={state.newPostText}
                     dispatch={dispatch}
            />
        </div>
    )
}