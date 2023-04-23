import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ActionsType, RootStateType} from "./redux/reduxStore";

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppPropsType> = (
    {
        state,
        dispatch
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
                                                                 dispatch={dispatch}
                        />}/>
                        <Route path='/dialogs/*' element={<Dialogs state={state.dialogsPage}
                                                                   dispatch={dispatch}

                        />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

