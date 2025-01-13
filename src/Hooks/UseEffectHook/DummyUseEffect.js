// import React, { useEffect, useState } from 'react'

// function DummyJson() {

//     const [details, setDetails] = useState([])
//     useEffect(() => {
//         const fetchData = async () => {
      
       
//         fetch('https://dummyjson.com/products')
//       .then((response) => response.json())
//       .then((response) => {
//      setDetails(response.products)
//      console.log(response.products);
//     }) }
//         console.log('hi')
    
//       fetchData();
//     },[])
//   return (
//     <div>
        
//         <ul>
//       {details && details.map((item,id) => (
//       <li key={id}>{item.thumbnail}
//       <img src={item.images[1]} alt='thumbnail'></img>
//       </li>))}
//       </ul>
//     </div>
//   )
// }

// export default DummyJson


import React, { useReducer, useState } from 'react';
import './dummyjson.css'; // Assuming you have this CSS file for styling

// Reducer for cart management
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    default:
      return state;
  }
};

function DummyJson() {
  const [products, setProducts] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [showCart, setShowCart] = useState(false);

  // Fetch products (dummy data)
  React.useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const toggleCartView = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="app-container">
      <h1>Product Store</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.images[0]} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">Price: ${product.price}</p>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button className="view-cart-btn" onClick={toggleCartView}>
        {showCart ? 'Hide Cart' : 'View Cart'}
      </button>
      {showCart && (
        <div className="cart-details">
          <h2>Cart Details</h2>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.title} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p>Cart is empty.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default DummyJson;

