import React, {useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}

export function MyPosts() {

    const [postsData, setPosts] = useState<postsDataType[]>([
        {id: 1, message: 'Post 1', likesCount: 2},
        {id: 2, message: 'Post 3', likesCount: 4},
        {id: 3, message: 'Post 3', likesCount: 3},
    ])

    const postsElement = postsData.map(post =>{
        return <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
    })

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
                {postsElement}
            </div>
        </div>
    )
}