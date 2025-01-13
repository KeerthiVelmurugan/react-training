import React from 'react';
import { useCart } from './CartContext';

const ShoppingCart = () => {
  const { state, dispatch } = useCart();

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
