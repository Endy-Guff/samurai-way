import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {profileType} from "../../../redux/reduxStore";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import localPhoto from "../../../assets/img/user.png";
import {Info} from "./Info/Info";
import {updateModalType} from "../../../redux/profileReducer";

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

    const profilePhoto = profile?.photos.large || localPhoto

    const selectPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            savePhoto(e.currentTarget.files[0])
        }
    }

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.wrapper}>
            <div className={s.imgBox}>
                <img className={s.profilePhoto} src={profilePhoto} alt=""/>
                {isOwner &&
                <div className={s.inputBox}>
                    <label className={s.label} htmlFor={"fileInput"}></label>
                    <input className={s.input} id={'fileInput'} type={'file'} onChange={selectPhotoHandler}/>
                </div>}
            </div>
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