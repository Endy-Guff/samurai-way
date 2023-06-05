import React from 'react';
import s from "./Users.module.css";
import localPhoto from "../../assets/img/user.png";
import {usersDataType} from "../../redux/reduxStore";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {toggleIsFollowingAC} from "../../redux/usersReducer";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    followingProgress: number[]
    users: usersDataType[]
    changePage: (p: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    toggleIsFollowing: (isFollowing: boolean, userId: number) => void
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
        unfollow,
        toggleIsFollowing
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

                    const followHandler = () =>{
                        toggleIsFollowing(true, u.id)
                        usersAPI.follow(u.id)
                            .then((data)=>{
                                if (data.resultCode===0){
                                    follow(u.id)
                                }
                                toggleIsFollowing(false, u.id)
                        })
                    }

                    const unfollowHandler = () => {
                        toggleIsFollowing(true, u.id)
                        usersAPI.unfollow(u.id)
                            .then((data)=>{
                                if (data.resultCode===0){
                                    unfollow(u.id)
                                }
                                toggleIsFollowing(false, u.id)
                            })
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

