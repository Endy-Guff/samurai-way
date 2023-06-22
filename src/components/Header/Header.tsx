import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";

type HeaderPropsType = HeaderContainerPropsType

export function Header(props: HeaderPropsType){

    const logOutHandler = () =>{
        props.logOut()
    }

    return (
    <header className={s.header}>
        <div className={s.authBox}>
            {props.isAuth?props.login:<NavLink to={'/login'} />}
        </div>
        {props.isAuth&&<button onClick={logOutHandler}>Log Out</button>}
    </header>
    )
}
