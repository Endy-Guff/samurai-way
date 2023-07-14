import React, {useState} from 'react';
import s from './Info.module.css'
import {InfoItem} from "./InfoItem/InfoItem";
import {profileType, updateModalContactType, updateModalType} from "../../../../redux/profileReducer/profileReducer";
import {InfoSelector} from "./InfoSelector/InfoSelector";

type InfoPropsType = {
    profile: profileType
    isOwner: boolean
    updateProfileInfo: (update: updateModalType) => void
}

// type FormValuesType = {}
// type InfoDataFormCustomPropsType = {
//     profile: profileType
//     editMode: boolean
//
// }
// type InfoDataFormPropsType =
//     InfoDataFormCustomPropsType
//     & InjectedFormProps<FormValuesType, InfoDataFormCustomPropsType>

export const Info: React.FC<InfoPropsType> = (
    {
        profile,
        updateProfileInfo,
        isOwner
    }
) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    // const onSubmit = (data: any) => {
    //     setEditMode(false)
    //     if (editMode){
    //         updateProfileInfo(data)
    //     }
    // }

    return (
        <div className={s.wrapper}>
            {/*{!isOwner && !editMode && <button onClick={() => setEditMode(true)}>Edit</button>}*/}
            {/*{editMode*/}
            {/*    ? <InfoReduxForm onSubmit={onSubmit} profile={profile} editMode={editMode}/>*/}
                 <InfoData profile={profile} updateProfileInfo={updateProfileInfo} isOwner={isOwner}/>
            {/*}*/}
        </div>
    );
};

const InfoData: React.FC<{ profile: profileType, isOwner: boolean, updateProfileInfo: (update: updateModalType) => void }> = ({profile, updateProfileInfo,isOwner}) => {

    const updateProfileInfoHandler = (modal: updateModalType = {}, contacts: updateModalContactType = {}) =>{
        updateProfileInfo({...modal, contacts: {...contacts}})
    }

    return (
        <>
            <InfoItem title={'Обо мне'}
                      value={profile?.aboutMe ? profile.aboutMe : 'Не указано'}
                      propertyName={'aboutMe'}
                      updateProfileInfo={updateProfileInfoHandler}
                      required={true}
                      isOwner={isOwner}
            />
            <InfoSelector title={'Ищу работу'}
                          value={profile?.lookingForAJob ? 'true' : 'false'}
                          propertyName={'lookingForAJob'}
                          updateProfileInfo={updateProfileInfoHandler}
                          isOwner={isOwner}
            />
            <InfoItem title={'Описание работы'}
                      value={profile?.lookingForAJobDescription ? profile.lookingForAJobDescription : 'Не указано'}
                      propertyName={'lookingForAJobDescription'}
                      updateProfileInfo={updateProfileInfoHandler}
                      required={true}
                      isOwner={isOwner}
            />
            <InfoItem title={'Полное имя'}
                      value={profile?.fullName ? profile.fullName : 'Не указано'}
                      propertyName={'fullName'}
                      updateProfileInfo={updateProfileInfoHandler}
                      required={true}
                      isOwner={isOwner}
            />
            {profile?.contacts && Object.entries(profile.contacts).map((el, i) => {
                const updateContactsHandler = (contacts: updateModalContactType) =>{
                    updateProfileInfoHandler({}, {...contacts})
                }
                return <InfoItem key={i}
                                 title={el[0]}
                                 value={el[1] ? el[1] : 'Не указано'}
                                 propertyName={el[0]}
                                 updateContactsHandler={updateContactsHandler}
                                 isOwner={isOwner}
                />
            })}
        </>
    )
}
//
// const InfoDataForm: React.FC<InfoDataFormPropsType> = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <button>Save</button>
//             <InfoData profile={props.profile} editMode={props.editMode}/>
//         </form>
//     )
// }
//
// const InfoReduxForm = reduxForm<FormValuesType, InfoDataFormCustomPropsType>({form: 'profileInfo'})(InfoDataForm)
