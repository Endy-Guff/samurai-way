// import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./profileReducer";
// import {AddMessageActionType, dialogsReducer, UpdateNewMessageTextActionType} from "./dialogsReducer";
//
export {}
//
//
// export type StoreType = {
//     _state: RootStateType
//     _rerenderEntireTree: (state: RootStateType) => void
//     getState: () => RootStateType
//     subscribe: (callback: (state: RootStateType)=>void) => void
//     dispatch: (action: ActionsType) => void
// }
//
// export const store: StoreType = {
//     _state: {
//         profilePage:{
//             newPostText: '',
//             postsData: [
//                 {id: 1, message: 'Post 1', likesCount: 2},
//                 {id: 2, message: 'Post 3', likesCount: 4},
//                 {id: 3, message: 'Post 3', likesCount: 3},
//             ]
//         },
//         dialogsPage:{
//             newMessageText: '',
//             dialogsData: [
//                 {id: 1, name: 'Andy'},
//                 {id: 2, name: 'Valera'},
//                 {id: 3, name: 'Ivan'}
//             ],
//             messagesData: [
//                 {id: 1, text: 'Hi!'},
//                 {id: 2, text: 'How are you?'},
//                 {id: 3, text: 'Were are you?'}
//             ]
//         }
//     },
//     _rerenderEntireTree() {
//         console.log('1')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(callback: (state: RootStateType)=>void) {
//         this._rerenderEntireTree = callback
//     },
//     dispatch(action: ActionsType){
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._rerenderEntireTree(this._state)
//     }
// }
