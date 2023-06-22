import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

type AppPropsType = {
    // store: StoreType
    // state: RootStateType
    // dispatch: (action: ActionsType) => void
}

const App: React.FC<AppPropsType> = (
    {
        // store,
        // state,
        // dispatch
    }
) => {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer
                        />}/>
                        <Route path='/dialogs/*' element={<DialogsContainer
                        />}/>
                        <Route path='/users/*' element={<UsersContainer
                        />}/>
                        <Route path={'/login'} element={<Login />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

