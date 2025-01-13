import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

// Initial state for the cart
const initialCartState = [];

// Reducer function to manage cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREASE_QUANTITY":
      return state
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewCart, setViewCart] = useState(false);

  // useReducer for cart management
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  // Fetch all products
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Add to cart action
  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    alert("added")
  };

  // Increase quantity action
  const handleIncreaseQuantity = (product) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: product });
  };

  // Decrease quantity action
  const handleDecreaseQuantity = (product) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: product });
  };

  // Clear cart action
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>FakeStore E-Commerce</h1>
      <button
        onClick={() => setViewCart(false)}
        style={{
          marginBottom: "20px",
          marginRight: "10px",
          padding:"10px",
          borderRadius:"10px",
          color:"white",
          backgroundColor:"steelblue",
          border:"none"
        }}
        className="bt"
      >
        View Products
      </button>
      <button
        onClick={() => setViewCart(true)}
        style={{
          marginBottom: "20px",
          marginRight: "10px",
          padding:"10px",
          borderRadius:"10px",
          backgroundColor:"steelblue",
          border:"none",
          color:"white"
        }}
        className="bt"
      >
        View Cart ({cart.length})
      </button>
      <button onClick={handleClearCart} style={{ marginBottom: "20px",padding:"10px",
          borderRadius:"10px",color:"white",border:"none",
          backgroundColor:"steelblue" }} className="bt">
        Clear Cart
      </button>

      {viewCart ? (
        // Show cart details
        <div>
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <ul>
                {cart.map((item) => (
                  <li key={item.id} style={{ marginBottom: "10px" }}>
                    <strong>{item.title}</strong> - ${item.price} x{" "}
                    {item.quantity}
                    <div>
                      <button
                        onClick={() => handleIncreaseQuantity(item)}
                        style={{
                          marginRight: "5px",
                          padding: "5px 10px",
                          backgroundColor: "#28a745",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </button>
                      {item.quantity}
                      <button
                        onClick={() => handleDecreaseQuantity(item)}
                        style={{
                          marginRight: "5px",
                          padding: "5px 10px",
                          backgroundColor: "#dc3545",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                    
                        -
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
            </div>
          )}
        </div>
      ) : (
        // Show the product list
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
                {product.title.length > 20
                  ? product.title.slice(0, 20) + "..."
                  : product.title}
              </h3>
              <p><strong>${product.price}</strong></p>
              <button
                onClick={() => handleAddToCart(product)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
