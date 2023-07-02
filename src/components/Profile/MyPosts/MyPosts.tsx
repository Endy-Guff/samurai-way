import React, {memo} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostsMapPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength30, required} from "../../../utils/validators";
import {Textarea} from "../../FormsControl/FormsControl";

export const MyPosts: React.FC<MyPostsMapPropsType> = memo(({
    posts,
    addPost,
}) => {
    const postsElement = posts.map(post =>{
        return <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
    })

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = (data: FormDataType) =>{
        addPost(data.newPostText)
    }

    return (
        <div>
            <div className={s.postsHeader}>
                <h5>MyPosts</h5>
                <AddPostReduxForm onSubmit={addPostHandler}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
})

type FormDataType = {
    newPostText: string
}

const AddPostForm = (props: InjectedFormProps<FormDataType>) =>{
    return <form className={s.textareaBox} onSubmit={props.handleSubmit}>
        <Field className={s.textarea}
               name={'newPostText'}
               component={Textarea}
               placeholder={'Tell something'}
               validate={[required, maxLength30]}/>
        <button className={s.button}>add</button>
    </form>
}

const AddPostReduxForm = reduxForm<FormDataType>({form: 'newPost'})(AddPostForm)