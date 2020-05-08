import React from 'react';
import profileReducer, { addPost, deletePost } from "./profile-reducer"
import { render } from '@testing-library/react';

let state = {
  postsData: [
    { id: 1, title: "My story", message: "Hello, how are you?" },
    { id: 2, title: "The best post", message: "Test message, oh dadada" },
  ],

};


test('New Post should be add', () => {
  let action = addPost("title", "just a test")
  let newState = profileReducer(state, action)

  expect(newState.postsData.length).toBe(3)
});


test('New Post should be add', () => {
  let action = deletePost(10)
  let newState = profileReducer(state, action)

  expect(newState.postsData.length).toBe(2)
});
