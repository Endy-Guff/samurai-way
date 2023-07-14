import React from 'react';
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import localPhoto from "../../../assets/img/user.png";
import {usersDataType} from "../../../redux/usersReducer/usersReducer";

type UserPropsType = {
    user: usersDataType
    followingProgress: number[]
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const User: React.FC<UserPropsType> = (
    {
        user,
        followingProgress,
        follow,
        unfollow
    }
) => {

    const followHandler = () =>{
        follow(user.id)
    }

    const unfollowHandler = () => {
        unfollow(user.id)
    }

    return (
        <div className={s.user} key={user.id}>
            <div className={s.inform}>
                <div className={s.avaBlock}>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.img}
                             src={user.photos.small != null ? user.photos.small : localPhoto}
                             alt=""/>
                    </NavLink>
                </div>
                <div className={s.desc}>
                    <span className={s.name}>{user.name}</span>
                    <span className={s.status}>{user.status}</span>
                </div>
            </div>
            <div className={s.btnBox}>
                {user.followed
                    ? <button className={s.btn}
                              disabled={followingProgress.some(id=>id===user.id)}
                              onClick={unfollowHandler}>unfollow</button>
                    : <button className={s.btn}
                              disabled={followingProgress.some(id=>id===user.id)}
                              onClick={followHandler}>follow</button>
                }
            </div>
        </div>
    );
};

