import React from 'react';
import 'normalize.css'
import './index.css';
import {RootStateType, store} from './redux/reduxStore'
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

// eslint-disable-next-line react-hooks/rules-of-hooks

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
