import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import User from './User'
import { Provider } from 'react-redux'
import store from "./store"

function ReduxApp() {
  return (
    <div>
        <Provider store={store}>
            <Home />
            <br />
            <Contact />
            <User />
            
        
        </Provider>
      
    </div>
  )
}

export default ReduxApp
