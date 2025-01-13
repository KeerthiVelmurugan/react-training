import React, { useReducer } from 'react';

// Initial state
const initialState = { items: [], total: 0 };

// Reducer function
function reducer(state, action) {
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
}

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (item) => {
    dispatch({ type: 'add', item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'remove', id });
  };

  const updateItem = (item) => {
    dispatch({ type: 'update', item });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={() => addItem({ id: 1, name: 'Item 1', price: 10 })}>Add Item 1</button>
      <button onClick={() => addItem({ id: 2, name: 'Item 2', price: 20 })}>Add Item 2</button>
      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
            <button onClick={() => updateItem({ ...item, price: item.price + 5 })}>Increase Price</button>
          </li>
        ))}
      </ul>
      <p>Total: ${state.total}</p>
    </div>
  );
};

export default ShoppingCart;
