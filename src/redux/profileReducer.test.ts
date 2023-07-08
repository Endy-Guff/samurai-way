import React from 'react'
import {addPostActionCreator, deletePostActionCreator, profileReducer} from "./profileReducer";
import {profilePageType} from "./reduxStore";

const initialState: profilePageType = {
    profile: null,
    status: '',
    postsData: [
        {id: 1, message: 'Post 1', likesCount: 2},
        {id: 2, message: 'Post 3', likesCount: 4},
        {id: 3, message: 'Post 3', likesCount: 3},
    ]
}

it('new post should be added', function () {
    const action = addPostActionCreator('newPost')

    const endState = profileReducer(initialState, action)

    expect(endState.postsData.length).toBe(4)
});

it('message of new post should be correct', function () {
    const action = addPostActionCreator('newPost')

    const endState = profileReducer(initialState, action)

    expect(endState.postsData[3].message).toBe('newPost')
});

it('after post deleting length should be decrement', function () {
    const action = deletePostActionCreator(1)

    const endState = profileReducer(initialState, action)

    expect(endState.postsData.length).toBe(2)
});