import React from 'react'
import store from "./store"
import CounterApp from './CounterApp'
import { Provider } from 'react-redux'

function CounterIndex() {
  return (
    <Provider store={store}>
    <div>
      <CounterApp />
    </div>
    </Provider>
  )
}

export default CounterIndex
