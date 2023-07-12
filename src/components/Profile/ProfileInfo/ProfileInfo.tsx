import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {profileType} from "../../../redux/reduxStore";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import localPhoto from "../../../assets/img/user.png";

type ProfileInfoType = {
    profile: profileType
    status: string
    isOwner: boolean
    savePhoto:(file: File)=>void
    updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = (
    {
        profile,
        status,
        updateStatus,
        isOwner,
        savePhoto
    }
) =>{

    const profilePhoto = profile?.photos.large || localPhoto

    const selectPhotoHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        if (e.currentTarget.files?.length){
            savePhoto(e.currentTarget.files[0])
        }
    }

    if (!profile){
        return <Preloader />
    }
    return(
        <div>
            <img className={s.profilePhoto} src={profilePhoto} alt=""/>
            {isOwner&& <input type={'file'} onChange={selectPhotoHandler}/>}
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}
                                    disable={!isOwner}
            />
        </div>
    )
}