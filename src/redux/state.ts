let rerenderEntireTree = () =>{
    console.log()
}

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
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[]
}

export type RootStateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}

export let state: RootStateType = {
    profilePage:{
        newPostText: '',
        postsData: [
            {id: 1, message: 'Post 1', likesCount: 2},
            {id: 2, message: 'Post 3', likesCount: 4},
            {id: 3, message: 'Post 3', likesCount: 3},
        ]
    },
    dialogsPage:{
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
}

export const addPost = () =>{
    const newPostItem: postsDataType = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.postsData.push(newPostItem)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostText = (text: string) =>{
    state.profilePage.newPostText = text
    rerenderEntireTree()
}

export const subscribe = (callback: ()=>void) =>{
    rerenderEntireTree = callback
}

