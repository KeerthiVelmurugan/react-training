import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCart } from './slice'

function Cart() {
    const cart_items = useSelector(state => state.cartInfo)
    const dispatch = useDispatch()
    console.log(cart_items);
    
  return (
    <div>
        {cart_items && cart_items.cart.map((i,index) => (
            <div>
            <li>{i.name}-------{i.price}</li>
            <button onClick={()=> dispatch(DeleteCart({index:index}))}>delete</button>
            </div>
        ) )}

        <h5>Total Price: {cart_items.totalPrice}</h5>
      
    </div>
  )
}

export default Cart
