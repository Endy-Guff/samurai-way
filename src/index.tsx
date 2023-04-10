import React from 'react';
import 'normalize.css'
import './index.css';
import {addPost, RootStateType, state, subscribe, updateNewPostText} from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";



// eslint-disable-next-line react-hooks/rules-of-hooks

export const rerenderEntireTree = () =>{
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree()
subscribe(rerenderEntireTree)
