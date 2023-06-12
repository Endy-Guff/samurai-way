import React from "react";
import {Dialogs} from "./Dialogs";
import {dialogsPageType, StoreType} from "../../redux/reduxStore";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    state: dialogsPageType
}

type MapDispatchToPropsType = {
    addMessage: ()=>void
    updateNewMessageText:(text: string)=>void
}

export type DialogsMapProps = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        state: state.dialogsPage,
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
export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
