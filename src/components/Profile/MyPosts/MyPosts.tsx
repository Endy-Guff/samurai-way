import React, {createRef, useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {postsDataType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: postsDataType[]
}

export const MyPosts: React.FC<MyPostsPropsType> = ({
    postsData
}) => {

    const postsElement = postsData.map(post =>{
        return <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
    })

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () =>{
        const text = newPostElement.current?.value
        alert(text)
    }
    return (
        <div>
            <div className={s.postsHeader}>
                <h5>MyPosts</h5>
                <div className={s.textareaBox}>
                    <textarea className={s.textarea} ref={newPostElement}></textarea>
                    <button className={s.button} onClick={addPost}>add</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}