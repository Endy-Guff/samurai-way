import React from "react";
import s from './ProfileInfo.module.css'
import {profileType} from "../../../redux/reduxStore";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoType = {
    profile: profileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = (
    {
        profile,
        status,
        updateStatus
    }
) =>{
    if (!profile){
        return <Preloader />
    }
    return(
        <div>
            <img src={profile.photos.large} alt=""/>
            <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
    )
}