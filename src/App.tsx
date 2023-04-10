import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const App: React.FC<AppPropsType> = (
    {
        state,
        addPost,
        updateNewPostText
    }
) => {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile state={state.profilePage}
                                                                 addPost={addPost}
                                                                 updateNewPostText={updateNewPostText}
                        />}/>
                        <Route path='/dialogs/*' element={<Dialogs state={state.dialogsPage} />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

