import React from "react";
import s from './ProfileInfo.module.css'
import {profileType} from "../../../redux/reduxStore";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: profileType
}

export const ProfileInfo: React.FC<ProfileInfoType> = (
    {
        profile
    }
) =>{
    if (!profile){
        return <Preloader />
    }
    return(
        <div>
            <img src={profile.photos.large} alt=""/>
            Ava + description
        </div>
    )
}