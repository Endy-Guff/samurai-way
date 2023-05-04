import React from "react";
import s from './Users.module.css'
import {MapToPropsType} from "./UsersContainer";

export const Users: React.FC<MapToPropsType> = (
    {
        state,
        follow,
        unfollow,
        setUsers
    }
) =>{

    if(state.length === 0){
        setUsers([
            {id: 1, photoUrl: 'https://i.yapx.cc/PdTRP.jpg', followed: true, fullName: 'Andrey', status: 'qwerty', location: {country: 'Russia', city: 'Rostov'}},
            {id: 2, photoUrl: 'https://i.yapx.cc/PdTRP.jpg', followed: false, fullName: 'Andre', status: 'qwerty123', location: {country: 'Ukraine', city: 'Kiev'}},
            {id: 3, photoUrl: 'https://i.yapx.cc/PdTRP.jpg', followed: true, fullName: 'Ivan', status: 'qwerty2234', location: {country: 'Russia', city: 'Moscow'}},
        ])
    }


    const mappedUsers = state.map(u=>{return(
        <div className={s.user}>
            <div className={s.inform}>
                <div className={s.avaBlock}>
                    <img className={s.img} src={u.photoUrl} alt=""/>
                </div>
                <div className={s.desc}>
                    <span className={s.name}>{u.fullName}</span>
                    <span className={s.location}>{u.location.country}, {u.location.city}</span>
                    <span className={s.status}>{u.status}</span>
                </div>
            </div>
            <div className={s.btnBox}>
                {u.followed
                    ?<button className={s.btn} onClick={()=>unfollow(u.id)}>unfollow</button>
                    :<button className={s.btn} onClick={()=>follow(u.id)}>follow</button>
                }
            </div>
        </div>
    )})

    return (
        <div className={s.wrapper}>
            {mappedUsers}
        </div>
    )
}