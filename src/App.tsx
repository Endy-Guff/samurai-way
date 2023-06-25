import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppDispatchType, RootStateType, StoreType} from "./redux/reduxStore";
import {getMeTC, logoutTC} from "./redux/authReducer";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";

type AppPropsType = {
    // store: StoreType
    // state: RootStateType
    // dispatch: (action: ActionsType) => void
}

class App extends React.Component<MapToPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
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
                            <Route path={'/login'} element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}
type MapToPropsType = MapStateToPropsType&MapDispatchToPropsType
const MapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        initializeApp: () => {
            dispatch(initializeApp())
        },
    }
}
const MapStateToProps = (state: StoreType): MapStateToPropsType=>{
    return {
        initialized: state.app.initialized
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(App);

