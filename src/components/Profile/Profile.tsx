import React from 'react';
import s from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'

export function Profile() {
    return (
        <div className={s.content}>
            Ava + description
            <MyPosts />
        </div>
    )
}