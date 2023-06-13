import React from 'react';
import s from './ProfileStatus.module.css'
import {updateStatus} from "../../../../redux/profileReducer";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    changeEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        if (this.state.editMode){
            this.props.updateStatus(this.state.status)
        }
    }
    changeStatus = (status: string) =>{
        this.setState({
            status: status
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onClick={this.changeEditMode}>
                           {this.props.status}
                        </span>
                    </div>
                    : <div>
                        <input type="text"
                               value={this.state.status}
                               autoFocus={true}
                               onChange={(e)=>this.changeStatus(e.currentTarget.value)}/>
                        <button onClick={this.changeEditMode}>Save</button>
                    </div>
                }


            </div>
        )
    }
};

