import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar(){
    return <nav className={s.nav}>
    <ul className={s.nav_list}>
      <li className={s.nav_item}><NavLink to="/Profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink></li>
      <li className={s.nav_item}><NavLink to="/Messages" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink></li>
      <li className={s.nav_item}>News</li>
      <li className={s.nav_item}>Music</li>
      <li className={s.nav_item}>Settings</li>
    </ul>
  </nav>
}