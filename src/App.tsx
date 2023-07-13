import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {HashRouter, Route, Routes} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppDispatchType, StoreType} from "./redux/reduxStore";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import Error from "./components/common/Error/Error";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

class App extends React.Component<MapToPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <HashRouter>
                <div className="App-wrapper">
                    {this.props.error&&<Error/>}
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/profile/:userId?' element={
                                <React.Suspense fallback={<Preloader/>}>
                                    <ProfileContainer/>
                                </React.Suspense>}/>
                            <Route path='/dialogs/*' element={
                                <React.Suspense fallback={<Preloader/>}>
                                    <DialogsContainer/>
                                </React.Suspense>
                            }/>
                            <Route path='/users/*' element={<UsersContainer
                            />}/>
                            <Route path={'/login'} element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
    error: boolean
}
type MapToPropsType = MapStateToPropsType & MapDispatchToPropsType
const MapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        initializeApp: () => {
            dispatch(initializeApp())
        },
    }
}
const MapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized,
        error:state.app.error
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(App);

