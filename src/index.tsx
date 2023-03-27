import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './index.css';
import App from './App';
import {state} from './redux/state'



// eslint-disable-next-line react-hooks/rules-of-hooks


ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);