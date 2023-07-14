import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {Info} from "./Info/Info";
import {profileType, updateModalType} from "../../../redux/profileReducer/profileReducer";
import {ProfileImg} from "./ProfileImg/ProfileImg";

type ProfileInfoType = {
    profile: profileType
    status: string
    isOwner: boolean
    savePhoto: (file: File) => void
    updateStatus: (status: string) => void
    updateProfileInfo: (update: updateModalType) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = (
    {
        profile,
        status,
        updateStatus,
        isOwner,
        savePhoto,
        updateProfileInfo
    }
) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.wrapper}>
            <ProfileImg profile={profile} savePhoto={savePhoto} isOwner={isOwner}/>
            <div className={s.infoBox}>
                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}
                                        disable={!isOwner}
                />
                <Info profile={profile}
                      updateProfileInfo={updateProfileInfo}
                      isOwner={!isOwner}
                />
            </div>
        </div>
    )
}