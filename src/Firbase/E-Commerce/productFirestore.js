import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc
} from "firebase/firestore";
import { db } from "../firebaseConfig";

function ProductFormFirestore() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: ""
  });
  const [productList, setProductList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    await addDoc(collection(db, "products"), {
      ...product,
      time: new Date().toLocaleString()
    });
    setProduct({
      name: "",
      price: "",
      image: "",
      category: "",
      description: ""
    });
    fetchProducts();
  };

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    console.log(snapshot);
    
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProductList(list);
  };

  const handleEdit = (data) => {
    setProduct({
      name: data.name,
      price: data.price,
      image: data.image || "",
      category: data.category,
      description: data.description
    });
    setEditId(data.id);
  };

  const handleUpdate = async () => {
    const productDoc = doc(db, "products", editId);
    await updateDoc(productDoc, {
      ...product,
      time: new Date().toLocaleString()
    });
    setProduct({
      name: "",
      price: "",
      image: "",
      category: "",
      description: ""
    });
    setEditId(null);
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>{editId ? "Update" : "Add"} Product</h2>
      <input type="text" name="name" value={product.name} placeholder="Product Name" onChange={handleChange} /><br />
      <input type="number" name="price" value={product.price} placeholder="Price" onChange={handleChange} /><br />
      <input type="text" name="image" value={product.image} placeholder="Image URL" onChange={handleChange} /><br />
      <input type="text" name="category" value={product.category} placeholder="Category" onChange={handleChange} /><br />
      <textarea name="description" value={product.description} placeholder="Description" onChange={handleChange} /><br />

      {editId ? (
        <button onClick={handleUpdate}>Update Product</button>
      ) : (
        <button onClick={addProduct}>Add Product</button>
      )}

      <hr />
      <h3>Product List</h3>
      {productList.map((item) => (
        <div key={item.id} style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}>
          <img src={item.image} alt="" style={{ width: "100px", height: "100px" }} />
          <p><strong>{item.name}</strong></p>
          <p>₹ {item.price}</p>
          <p>Category: {item.category}</p>
          <p>{item.description}</p>
          <p><em>{item.time}</em></p>
          <button onClick={() => handleEdit(item)}>Update</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductFormFirestore;
