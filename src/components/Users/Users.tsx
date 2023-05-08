import React from "react";
import s from './Users.module.css'
import {MapToPropsType} from "./UsersContainer";
import {instance} from "../../redux/reduxStore";
import localPhoto from "../../assets/img/user.png"

export class Users extends React.Component<MapToPropsType> {

componentDidMount() {
    instance.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>this.props.setUsers(response.data.items))
}
    render()
{
    return (
        <div className={s.wrapper}>
            {
                this.props.state.map(u => {
                    return (
                        <div className={s.user} key={u.id}>
                            <div className={s.inform}>
                                <div className={s.avaBlock}>
                                    <img className={s.img} src={u.photos.small != null ? u.photos.small : localPhoto}
                                         alt=""/>
                                </div>
                                <div className={s.desc}>
                                    <span className={s.name}>{u.name}</span>
                                    <span className={s.status}>{u.status}</span>
                                </div>
                            </div>
                            <div className={s.btnBox}>
                                {u.followed
                                    ? <button className={s.btn} onClick={() => this.props.unfollow(u.id)}>unfollow</button>
                                    : <button className={s.btn} onClick={() => this.props.follow(u.id)}>follow</button>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
}