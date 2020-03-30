import React, { Component } from 'react'
import app from './App.module.css'
import './css/global.css'
import Header from './components/header/Header'
import Nav from './components/navigation/Navigation'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
import { Route, BrowserRouter } from 'react-router-dom'
import News from './components/news/News'
import Music from './components/music/Music'
import Settings from './components/settings/Settings'

const App = (props) => {
    return (
        // console.log(props)
        <BrowserRouter>
            <div className={app.wrapper}>
                <Header />
                <Nav />
                <div className={app.content}>
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogsData} messages={props.messagesData} />} />
                    <Route path='/profile' render={ () => <Profile posts={props.postsData} />} />
                    <Route path='/news' render={ () => <News />} />
                    <Route path='/music' render={ () => <Music />} />
                    <Route path='/settings' render={ () => <Settings />} />
                    {/* <Dialogs /> */}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App