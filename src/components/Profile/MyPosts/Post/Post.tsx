import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string,
    likesCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <div className={s.itemInner}>
                <img src="https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-panda-v-ochkah.jpg"
                     alt=""/>
                {props.message}
            </div>
            {props.likesCount} likes
        </div>
    )
}