import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    status: string
    disable: boolean
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const changeEditMode = () => {
        if (!props.disable) {
            setEditMode(!editMode)
            if (editMode) {
                props.updateStatus(status)
            }
        }
    }
    const changeStatus = ( e: React.ChangeEvent<HTMLInputElement>) =>{
        setStatus(e.currentTarget.value)
    }

        return (
            <div className={s.wrapper}>
                {!editMode
                    ? <div>
                        <span onClick={changeEditMode}>
                           { props.status
                               ? <p className={s.status}>{props.status}</p>
                               : <p className={s.statusEmpty}>статус пуст</p>}
                        </span>
                    </div>
                    : <div>
                        <input type="text"
                               value={status}
                               autoFocus={true}
                               onChange={changeStatus}/>
                        <button onClick={changeEditMode}>Save</button>
                    </div>
                }


            </div>
        )
};

