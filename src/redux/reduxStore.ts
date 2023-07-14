import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {
    AddPostActionType, deletePostActionType, profilePageType,
    profileReducer, setPhotoActionType, SetStatusActionType,
    SetUserProfileActionCreator,
} from "./profileReducer/profileReducer";
import {AddMessageActionType, dialogsPageType, dialogsReducer} from "./dialogsReducer/dialogsReducer";
import {
    FollowActionType,
    SetCurrentPageActionType, SetTotalCountActionType,
    SetUsersActionType, ToggleIsFetchingActionType, toggleIsFollowingActionType,
    UnfollowActionType,
    usersReducer
} from "./usersReducer/usersReducer";
import {authReducer, setCaptchaUrlActionType, setUserDataActionType} from "./authReducer/authReducer";
import thunk from "redux-thunk";
import {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {reducer as formReducer} from 'redux-form'
import {appReducer, setErrorACType, setErrorMessageACType, setInitializedACType} from "./appReducer/appReducer";

export type RootStateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}

export type ActionsType = AddPostActionType | AddMessageActionType
    | FollowActionType | UnfollowActionType | SetUsersActionType
    | SetCurrentPageActionType | SetTotalCountActionType
    | ToggleIsFetchingActionType | SetUserProfileActionCreator
    | setUserDataActionType | toggleIsFollowingActionType
    | SetStatusActionType | setInitializedACType | deletePostActionType
    | setPhotoActionType | setErrorACType | setErrorMessageACType
    | setCaptchaUrlActionType

export type StoreType = ReturnType<typeof reducers>
export type AppDispatchType = ThunkDispatch<StoreType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>()

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store