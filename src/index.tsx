import React from 'react';
import 'normalize.css'
import './index.css';
import {state} from './redux/state'
import {rerenderEntireTree} from "./render";



// eslint-disable-next-line react-hooks/rules-of-hooks


rerenderEntireTree(state)
