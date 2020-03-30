import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Rostik" },
    { id: 3, name: "Andrey" },
    { id: 4, name: "Maxim" },
    { id: 5, name: "Roma" }
]

let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "What do you do" },
    { id: 4, message: "Ho-ho" }
]

let postsData = [
    {id: 1, title: 'My story', message: 'Hello, how are you?'},
    {id: 1, title: 'Second post', message: 'Test message, oh dadada'}
]

ReactDOM.render(<App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
