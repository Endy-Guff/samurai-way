import React from 'react';
import s from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    status: string
}
type ProfileStatusStateType = {
    editMode: boolean
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    state = {
        editMode: false
    }

    changeEditMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onClick={this.changeEditMode.bind(this)}>
                           {this.props.status}
                        </span>
                    </div>
                    : <div>
                        <input type="text" value={this.props.status} autoFocus={true}/>
                        <button onClick={this.changeEditMode.bind(this)}>Save</button>
                    </div>
                }


            </div>
        )
    }
};

