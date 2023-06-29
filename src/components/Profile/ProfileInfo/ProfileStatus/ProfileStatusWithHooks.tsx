import React, {useState} from 'react';
import s from './ProfileStatus.module.css'
import {updateStatus} from "../../../../redux/profileReducer";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)

    const changeEditMode = () => {
        setEditMode(!editMode)
        if (editMode){
            props.updateStatus(status)
        }
    }
    const changeStatus = ( e: React.ChangeEvent<HTMLInputElement>) =>{
        setStatus(e.currentTarget.value)
    }
    // componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>,) {
    //     if (prevProps.status!==this.props.status){
    //         this.setState({status:this.props.status})
    //     }
    // }

        return (
            <div>
                {!editMode
                    ? <div>
                        <span onClick={changeEditMode}>
                           {props.status}
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

