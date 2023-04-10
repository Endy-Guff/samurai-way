import React from 'react';
import 'normalize.css'
import './index.css';
import {store} from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";



// eslint-disable-next-line react-hooks/rules-of-hooks

export const rerenderEntireTree = () =>{
    ReactDOM.render(
        <App state={store.getState()}
             addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)
