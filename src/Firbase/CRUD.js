// src/components/CRUD.js
import React, { useState, useEffect } from 'react';
import { db, auth } from "./firebaseConfig"
import { ref, push, set, onValue, remove, update } from 'firebase/database';

const CRUD = () => {
  const [items, setItems] = useState({});
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const userId = auth.currentUser ? auth.currentUser.uid : null;
  console.log(userId);
  

  // Create
  const addItem = () => {
    if (!userId) {
      console.error('User not logged in!');
      return;
    }
    const newRef = push(ref(db, 'users/' + userId + '/items'));
    set(newRef, {
      title,
      description: desc,
    }).then(() => {
      setTitle('');
      setDesc('');
    });
  };

  // Read
  useEffect(() => {
    if (!userId) return;
    const itemsRef = ref(db, 'users/' + userId + '/items');
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      setItems(data || {});
    });
  }, [userId]);

  // Delete
  const deleteItem = (id) => {
    remove(ref(db, 'users/' + userId + '/items/' + id));
  };

  // Update
  const updateItem = (id) => {
    const updatedTitle = prompt('New title:');
    const updatedDesc = prompt('New description:');
    update(ref(db, 'users/' + userId + '/items/' + id), {
      title: updatedTitle,
      description: updatedDesc,
    });
  };

  return (
    <div>
      <h2>CRUD Operations</h2>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {Object.keys(items).map((id) => (
          <li key={id}>
            <strong>{items[id].title}</strong>: {items[id].description}
            <button onClick={() => deleteItem(id)}>Delete</button>
            <button onClick={() => updateItem(id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUD;
