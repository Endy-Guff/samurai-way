import React from "react";
import {Dialogs} from "./Dialogs";
import {dialogsPageType, StoreType} from "../../redux/reduxStore";
import {addMessageActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    state: dialogsPageType
}

type MapDispatchToPropsType = {
    addMessage: (message: string)=>void
}

export type DialogsMapProps = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        state: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>{
    return{
        addMessage: (message:string) =>{
            dispatch(addMessageActionCreator(message))
        },
    }
}
const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer