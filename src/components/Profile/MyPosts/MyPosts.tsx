import React, {createRef, useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {postsDataType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: postsDataType[]
    textValue: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({
    postsData,
    addPost,
    textValue,
    updateNewPostText
}) => {

    const postsElement = postsData.map(post =>{
        return <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
    })

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () =>{
        addPost()
    }

    const changeHandler = () =>{
        if (newPostElement.current){
            const text = newPostElement.current.value
            updateNewPostText(text)
        }
    }

    return (
        <div>
            <div className={s.postsHeader}>
                <h5>MyPosts</h5>
                <div className={s.textareaBox}>
                    <textarea className={s.textarea} ref={newPostElement} onChange={changeHandler} value={textValue}></textarea>
                    <button className={s.button} onClick={addPostHandler}>add</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}