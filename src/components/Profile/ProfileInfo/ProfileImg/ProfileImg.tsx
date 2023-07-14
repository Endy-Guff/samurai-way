import React, {ChangeEvent} from 'react';
import photoIcon from "../../../../assets/img/cameraIcon.svg";
import localPhoto from "../../../../assets/img/user.png";
import {profileType} from "../../../../redux/profileReducer/profileReducer";
import s from "./ProfileImg.module.css";

type ProfileImgPropsType = {
    profile: profileType
    savePhoto: (file: File) => void
    isOwner: boolean
}

export const ProfileImg: React.FC<ProfileImgPropsType> = (
    {profile, savePhoto, isOwner}
) => {

    const profilePhoto = profile?.photos.large || localPhoto

    const selectPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <div className={s.imgBox}>
            <img className={s.profilePhoto} src={profilePhoto} alt=""/>
            {isOwner &&
            <div className={s.inputBox}>
                <label className={s.label} htmlFor={"fileInput"}><img className={s.icon} src={photoIcon}
                                                                      alt=""/></label>
                <input className={s.input} id={'fileInput'} type={'file'} onChange={selectPhotoHandler}/>
            </div>}
        </div>
    );
};

