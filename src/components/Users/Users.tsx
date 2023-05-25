import React from 'react';
import s from "./Users.module.css";
import localPhoto from "../../assets/img/user.png";
import {usersDataType} from "../../redux/reduxStore";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    changePage: (p: number) => void
    users: usersDataType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Users: React.FC<UsersPropsType> = (
    {
        totalCount,
        pageSize,
        currentPage,
        changePage,
        users,
        follow,
        unfollow,
    }
) => {

    const pageCount = Math.ceil(totalCount / pageSize)
    const page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.pageBox}>
                {page.map(p => <span
                    key={p}
                    className={currentPage === p ? s.page + ' ' + s.active : s.page}
                    onClick={() => changePage(p)}
                >{p}</span>)}
            </div>
            {
                users.map(u => {
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
                                              onClick={() => unfollow(u.id)}>unfollow</button>
                                    : <button className={s.btn}
                                              onClick={() => follow(u.id)}>follow</button>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

