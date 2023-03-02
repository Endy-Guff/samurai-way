import React from 'react';
import s from './MyPosts.module.css'
import { Post } from './Post/Post';

export function MyPosts(){
    return(
        <div>
            <div className={s.posts_header}>
                <h5>MyPosts</h5>
                <textarea></textarea>
                <button>add</button>
            </div>
            <div className={s.posts}>
                <Post message='Post 1'/>
                <Post message='Post 2'/>
                <Post message='Post 3'/>
            </div>
        </div>
    )
}