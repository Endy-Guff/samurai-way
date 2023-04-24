import React from "react";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/reduxStore";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {StoreContext} from "../../../StoreContext";

type PropsType = {
    // store: StoreType
}

export const MyPostsContainer = (props: PropsType) =>{


    return <StoreContext.Consumer>
        {store=>{
            const state = store.getState()

            const addPost = () =>{
                store.dispatch(addPostActionCreator())
            }

            const changePostValue = (text: string) =>{
                store.dispatch(updateNewPostTextActionCreator(text))
            }
         return(
             <MyPosts posts={state.profilePage.postsData}
                      textValue={state.profilePage.newPostText}
                      addPost={addPost}
                      changePostValue={changePostValue}
             />
         )
        }
        }
    </StoreContext.Consumer>
}