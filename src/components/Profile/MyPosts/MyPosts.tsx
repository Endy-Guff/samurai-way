import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export function MyPosts() {
    return (
        <div>
            <div className={s.postsHeader}>
                <h5>MyPosts</h5>
                <div className={s.textareaBox}>
                    <textarea className={s.textarea}></textarea>
                    <button className={s.button}>add</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Post 1'/>
                <Post message='Post 2'/>
                <Post message='Post 3'/>
            </div>
        </div>
    )
}