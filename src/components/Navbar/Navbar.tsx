import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar(){
    return <nav className={s.nav}>
    <ul className={s.nav_list}>
      <li className={s.nav_item}><NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink></li>
      <li className={s.nav_item}><NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink></li>
      <li className={s.nav_item}><NavLink to="/users" className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink></li>
      <li className={s.nav_item}>News</li>
      <li className={s.nav_item}>Music</li>
      <li className={s.nav_item}>Settings</li>
    </ul>
  </nav>
}