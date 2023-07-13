import React, {ChangeEvent, useEffect, useState} from 'react';
import {updateModalContactType, updateModalType} from "../../../../../redux/profileReducer";
import s from "../InfoItem/InfoItem.module.css";

type InfoSelectorPropsType = {
    title: string
    value: 'true'|'false'
    propertyName: string
    required?: boolean
    isOwner: boolean
    updateProfileInfo?: (modal: updateModalType) => void
    updateContactsHandler?: (contacts: updateModalContactType) => void
}

export const InfoSelector:React.FC<InfoSelectorPropsType> = (
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
    const [inputValue, setInputValue] = useState<'true'|'false'>(value)

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
            }
        } else setInfo()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setInputValue(e.currentTarget.value as 'true'|'false')
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
                ?
                <select className={s.input}
                        value={inputValue}
                        onChange={onChangeHandler}
                        onBlur={onSubmit}
                >
                    <option value={'true'}>Да</option>
                    <option value={'false'}>Нет</option>
                </select>
                : <div className={s.value} onDoubleClick={changeEditMode}>
                    {value==='true'?'Да':'Нет'}
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

