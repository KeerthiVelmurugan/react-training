import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import CartApp from './CartApp'
import Cart from './Cart'

function CartIndex() {
  return (
    <div>
        <Provider store={store}>

            <CartApp />
            <Cart />
        </Provider>
      
    </div>
  )
}

export default CartIndex
