import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import ThemeChange from './ThemeChange'

function ThemeApp() {
  return (
    <Provider store={store}>
    <div>
      <ThemeChange />
    </div>
    </Provider>
  )
}

export default ThemeApp
