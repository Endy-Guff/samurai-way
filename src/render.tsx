import ReactDOM from "react-dom";
import App from "./App";
import {addPost, RootStateType, updateNewPostText} from "./redux/state";
import React from "react";

export const rerenderEntireTree = (state: RootStateType) =>{
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}