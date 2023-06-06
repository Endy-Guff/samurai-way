import React from "react";
import {Dialogs} from "./Dialogs";
import {dialogsPageType, StoreType} from "../../redux/reduxStore";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    state: dialogsPageType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessage: ()=>void
    updateNewMessageText:(text: string)=>void
}

export type DialogsMapProps = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        state: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>{
    return{
        addMessage: () =>{
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text: string) =>{
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)