import React from 'react';
import 'normalize.css'
import './index.css';
import {RootStateType, store} from './redux/reduxStore'
import ReactDOM from "react-dom";
import App from "./App";



// eslint-disable-next-line react-hooks/rules-of-hooks

export const rerenderEntireTree = (state: RootStateType) =>{
    ReactDOM.render(
        <App store={store}
             state={state}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(()=> {
    const state = store.getState()
    rerenderEntireTree(state)
})
