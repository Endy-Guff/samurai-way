import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ActionsType, RootStateType, StoreType} from "./redux/reduxStore";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppPropsType> = (
    {
        store,
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
                        <Route path='/profile' element={<Profile store={store}
                        />}/>
                        <Route path='/dialogs/*' element={<DialogsContainer store={store}
                        />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

