import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type dialogsDataType = {
    id: number,
    name: string
}

export type messagesDataType = {
    id: number,
    text: string
}

const App = () => {

    const [postsData, setPosts] = useState<postsDataType[]>([
        {id: 1, message: 'Post 1', likesCount: 2},
        {id: 2, message: 'Post 3', likesCount: 4},
        {id: 3, message: 'Post 3', likesCount: 3},
    ])

    const [dialogsData, setDialogsData] = useState<dialogsDataType[]>([
        {id: 1, name: 'Andy'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Ivan'},
    ])

    const [messagesData, setMessagesData] = useState<messagesDataType[]>([
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Were are you?'},
    ])

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile postsData={postsData}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

