import React from 'react';
import s from './Navbar.module.css'

export function Navbar(){
    return <nav className={s.nav}>
    <ul className={s.nav_list}>
      <li className={s.nav_item}><a href="/Profile">Profile</a></li>
      <li className={s.nav_item}><a href="/Messages">Messages</a></li>
      <li className={s.nav_item}>News</li>
      <li className={s.nav_item}>Music</li>
      <li className={s.nav_item}>Settings</li>
    </ul>
  </nav>
}