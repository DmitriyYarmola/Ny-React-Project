 import React, { Component } from 'react'
 import './App.css'
 import Header from './components/Header'
 import Nav from './components/Navigation'
 import Profile from './components/profile/Profile'
 import './css/global.css'

 const App = () => {
     return (
         <div className="app-wrapper">
            <Header />
            <Nav />
            <Profile />
         </div>
     )
 }

 export default App