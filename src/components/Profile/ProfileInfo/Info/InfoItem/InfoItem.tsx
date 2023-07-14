import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './InfoItem.module.css'
import {updateModalContactType, updateModalType} from "../../../../../redux/profileReducer/profileReducer";

type InfoItemPropsType = {
    title: string
    value: string
    propertyName: string
    required?: boolean
    isOwner: boolean
    updateProfileInfo?: (modal: updateModalType) => void
    updateContactsHandler?: (contacts: updateModalContactType) => void
}

export const InfoItem: React.FC<InfoItemPropsType> = (
    {
        title,
        value,
        propertyName,
        updateProfileInfo,
        updateContactsHandler,
        required,
        isOwner
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>(value)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        setInputValue(value)
    }, [value])

    const onSubmit = () => {
        const setInfo = () => {
            setEditMode(!editMode)
            if (updateProfileInfo) {
                updateProfileInfo({[propertyName]: inputValue})
            }
            if (updateContactsHandler) {
                updateContactsHandler({[propertyName]: inputValue})
            }
        }
        if (required && editMode) {
            if (inputValue) {
                setInfo()
            } else {

                setError(true)
            }
        } else setInfo()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const changeEditMode = () =>{
        if (!isOwner) setEditMode(true)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                {title}
            </div>

            {editMode
                ? <input className={s.input + ' ' + (error ? s.error : '')}
                         type="text"
                         onBlur={onSubmit}
                         onChange={onChangeHandler}
                         value={inputValue==='Не указано'?'':inputValue}
                         autoFocus={true}
                         required={required}/>
                : <div className={s.value} onDoubleClick={changeEditMode}>
                    {value}
                </div>
            }

            {/*{editMode*/}
            {/*    ? <Field value={'aaaa'} type={inputType} placeholder={propertyName} name={propertyName} component={Input}/>*/}
            {/*    : <div className={s.value}>*/}
            {/*        {value}*/}
            {/*    </div>*/}
            {/*}*/}
        </div>
    );
};
