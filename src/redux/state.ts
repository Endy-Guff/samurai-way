const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


export type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type dialogsDataType = {
    id: number,
    name: string
}

export type messagesDataType = {
    id: number,
    text: string
}

export type profilePageType = {
    newPostText: string
    postsData: postsDataType[]
}

export type dialogsPageType = {
    newMessageText: string
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[]
}

export type RootStateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}

type AddPostActionType = {
    type: 'ADD-POST'
}

type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    text: string
}

type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    text: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageTextActionType | AddMessageActionType

export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: () => void
    getState: () => RootStateType
    _addPost: ()=>void
    _addMessage: () => void
    _updateNewPostText: (text: string) => void
    _updateNewMessageText: (text: string) => void
    subscribe: (callback: ()=>void) => void
    dispatch: (action: ActionsType) => void
}

export const store: StoreType = {
    _state: {
        profilePage:{
            newPostText: '',
            postsData: [
                {id: 1, message: 'Post 1', likesCount: 2},
                {id: 2, message: 'Post 3', likesCount: 4},
                {id: 3, message: 'Post 3', likesCount: 3},
            ]
        },
        dialogsPage:{
            newMessageText: '',
            dialogsData: [
                {id: 1, name: 'Andy'},
                {id: 2, name: 'Valera'},
                {id: 3, name: 'Ivan'}
            ],
            messagesData: [
                {id: 1, text: 'Hi!'},
                {id: 2, text: 'How are you?'},
                {id: 3, text: 'Were are you?'}
            ]
        }
    },
    _rerenderEntireTree() {
        console.log('1')
    },
    getState() {
        return this._state
    },
    _addPost() {
        const newPostItem: postsDataType = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.postsData.push(newPostItem)
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree()
    },
    _addMessage() {
        const newMessageItem: messagesDataType = {
            id: 4,
            text: this._state.dialogsPage.newMessageText
        }

        this._state.dialogsPage.messagesData.push(newMessageItem)
        this._state.dialogsPage.newMessageText = ''
        this._rerenderEntireTree()
    },
    _updateNewPostText(text: string) {
        this._state.profilePage.newPostText = text
        this._rerenderEntireTree()
    },
    _updateNewMessageText(text: string) {
        this._state.dialogsPage.newMessageText = text
        this._rerenderEntireTree()
    },
    subscribe(callback: ()=>void) {
        this._rerenderEntireTree = callback
    },
    dispatch(action){
        if (action.type === ADD_POST){
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._updateNewPostText(action.text)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._updateNewMessageText(action.text)
        } else if (action.type === ADD_MESSAGE){
            this._addMessage()
        }
    }
}

export const addPostActionCreator = (): AddPostActionType =>({type: ADD_POST})
export const addMessageActionType = (): AddMessageActionType => ({type: ADD_MESSAGE})
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, text})
export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextActionType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, text})

// export let state: RootStateType = {
//     profilePage:{
//         newPostText: '',
//         postsData: [
//             {id: 1, message: 'Post 1', likesCount: 2},
//             {id: 2, message: 'Post 3', likesCount: 4},
//             {id: 3, message: 'Post 3', likesCount: 3},
//         ]
//     },
//     dialogsPage:{
//         dialogsData: [
//             {id: 1, name: 'Andy'},
//             {id: 2, name: 'Valera'},
//             {id: 3, name: 'Ivan'}
//         ],
//         messagesData: [
//             {id: 1, text: 'Hi!'},
//             {id: 2, text: 'How are you?'},
//             {id: 3, text: 'Were are you?'}
//         ]
//     }
// }

// export const addPost = () =>{
//     const newPostItem: postsDataType = {
//         id: 4,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//
//     state.profilePage.postsData.push(newPostItem)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree()
// }

// export const updateNewPostText = (text: string) =>{
//     state.profilePage.newPostText = text
//     rerenderEntireTree()
// }

// export const subscribe = (callback: ()=>void) =>{
//     rerenderEntireTree = callback
// }

