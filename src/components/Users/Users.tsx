import React from 'react';
import s from "./Users.module.css";
import {Pagination} from "../common/Pagination/Pagination";
import {usersDataType} from "../../redux/usersReducer/usersReducer";
import {User} from "./User/User";

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
            {users.map(u => (<User user={u}
                                   key={u.id}
                                   followingProgress={followingProgress}
                                   follow={follow}
                                   unfollow={unfollow}
            />))}
        </div>
    )
};

