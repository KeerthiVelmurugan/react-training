import React, { createContext, useReducer, useContext } from 'react';
import ShoppingCart from './ShoppingCart';

// Initial state
const initialState = { items: [], total: 0 };

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        items: [...state.items, action.item],
        total: state.total + action.item.price
      };
    case 'remove':
      const filteredItems = state.items.filter(item => item.id !== action.id);
      const itemToRemove = state.items.find(item => item.id === action.id);
      return {
        ...state,
        items: filteredItems,
        total: state.total - itemToRemove.price
      };
    case 'update':
      const updatedItems = state.items.map(item =>
        item.id === action.item.id ? action.item : item
      );
      const updatedTotal = updatedItems.reduce((acc, item) => acc + item.price, 0);
      return {
        ...state,
        items: updatedItems,
        total: updatedTotal
      };
    default:
      throw new Error('Unknown action type');
  }
};

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
        <ShoppingCart />
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
