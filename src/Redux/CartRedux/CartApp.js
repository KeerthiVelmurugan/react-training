import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, DeleteCart } from './slice'


function CartApp() {
    const data = useSelector(state => state.cartInfo)
    const dispatch = useDispatch()
    console.log(data.cart);
    
    return (
    <div>
      <button onClick={ () => dispatch(AddToCart({product:{name:"kurti",price:700}}))} >pro1</button>
      <button onClick={ () => dispatch(AddToCart({product:{name:"pant",price:1200}}))} >pro2</button>
      

      {/* {data && data.cart.map((i,index) => (
        <div>
            <li>{i.name}------{i.price}</li>

            <button onClick={() => dispatch(DeleteCart({index:index}))}>delete</button>
            
            </div>
      ))}
      <div>{data.totalPrice}</div> */}
    </div>
  )
}

export default CartApp
