import React from 'react';
import s from "./Users.module.css";
import localPhoto from "../../assets/img/user.png";
import {usersDataType} from "../../redux/reduxStore";
import {NavLink} from "react-router-dom";
import {Pagination} from "../common/Pagination/Pagination";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    followingProgress: number[]
    users: usersDataType[]
    changePage: (p: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Users: React.FC<UsersPropsType> = (
    {
        totalCount,
        pageSize,
        currentPage,
        users,
        followingProgress,
        changePage,
        follow,
        unfollow
    }
) => {

    return (
        <div className={s.wrapper}>
            <Pagination currentPage={currentPage}
                        totalCount={totalCount}
                        pageSize={pageSize}
                        changePage={changePage}
                        portionSize={10}
            />
            {
                users.map(u => {

                    const followHandler = () =>{
                        follow(u.id)
                    }

                    const unfollowHandler = () => {
                        unfollow(u.id)
                    }

                        return (
                        <div className={s.user} key={u.id}>
                            <div className={s.inform}>
                                <div className={s.avaBlock}>
                                    <NavLink to={'/profile/' + u.id}>
                                    <img className={s.img}
                                         src={u.photos.small != null ? u.photos.small : localPhoto}
                                         alt=""/>
                                    </NavLink>
                                </div>
                                <div className={s.desc}>
                                    <span className={s.name}>{u.name}</span>
                                    <span className={s.status}>{u.status}</span>
                                </div>
                            </div>
                            <div className={s.btnBox}>
                                {u.followed
                                    ? <button className={s.btn}
                                              disabled={followingProgress.some(id=>id===u.id)}
                                              onClick={unfollowHandler}>unfollow</button>
                                    : <button className={s.btn}
                                              disabled={followingProgress.some(id=>id===u.id)}
                                              onClick={followHandler}>follow</button>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

