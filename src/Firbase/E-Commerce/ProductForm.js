// import React, { useState, useEffect } from "react";
// import { db } from "../firebaseConfig";
// import { ref, push, set, onValue, remove, update } from "firebase/database";

// function ProductForm() {
//   const [product, setProduct] = useState({
//     name: "",
//     price: "",
//     image: "",
//     category: "",
//     description: "",
//   });
//   const [editId, setEditId] = useState(null)

//   const [productList, setProductList] = useState({});

//   const handleChange = (e) => {
    
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

// //   const addProduct = () => {
// //     const productRef = push(ref(db, "products"));
// //     set(productRef, {
// //       ...product,
// //       time: new Date().toLocaleString(),
// //     }).then(() => {
// //       setProduct({
// //         name: "",
// //         price: "",
// //         image: "",
// //         category: "",
// //         description: "",
// //       });
// //     });
// //   };

// function add(){
//     const pathRef = push(ref(db,"product"))
//     set(pathRef, product)
//     .then((res) => console.log(res)
//     )
// }

// function get_data(){
//     const pathRef = ref(db,"product")
//     onValue(pathRef,(res) => {
//         console.log(res.val());
//         setProductList(res.val()|| {})
        
//     })
// }
// function handleEdit(data,id){
//     console.log(data);
    
//     setProduct({
//     name: data.name,
//     price:data.price ,
//     image:data.image|| "" ,
//     category: data.category,
//     description: data.description ,
//   })

//   setEditId(id)
// }

// function handleDelete(id){
//     const pathRef = ref(db,"product/"+id)
//     remove(pathRef,product)

// }

// function handleUpdate(id){
//     const pathRef = ref(db,"product/"+editId)
//     update(pathRef,product)
// }

//   useEffect(() => {
//     // const dbRef = ref(db, "products");
//     // onValue(dbRef, (snapshot) => {
//     //   const data = snapshot.val();
//     //   setProductList(data || {});
//     // });
//     get_data()
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Add Product</h2>
//       <input
//         type="text"
//         name="name"
//         value={product.name}
//         placeholder="Product Name"
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="number"
//         name="price"
//         value={product.price}
//         placeholder="Price"
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="file"
//         name="image"
//         value={product.image}
//         placeholder="Image URL"
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="text"
//         name="category"
//         value={product.category}
//         placeholder="Category"
//         onChange={handleChange}
//       />
//       <br />
//       <textarea
//         name="description"
//         value={product.description}
//         placeholder="Description"
//         onChange={handleChange}
//       />
//       <br />
//       <button onClick={add}>Add Product</button>
//       <button onClick={handleUpdate}>update Product</button>

//       <hr />
//       <h3>Product List</h3>
//       {Object.keys(productList).map((id) => (
//         <div key={id} style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}>
//           <img src={productList[id].image} alt="" style={{ width: "100px", height: "100px" }} />
//           <p><strong>{productList[id].name}</strong></p>
//           <p>₹ {productList[id].price}</p>
//           <p>Category: {productList[id].category}</p>
//           <p>{productList[id].description}</p>
//           <p><em>{productList[id].time}</em></p>
//           <button onClick={() => handleEdit(productList[id],id)}>update</button>
//           <button onClick={() => handleDelete(id)}>delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductForm;


// import React, { useState, useEffect } from "react";
// import { db } from "../firebaseConfig";
// import { ref, push, set, onValue, remove, update } from "firebase/database";
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

// const storage = getStorage();

// function ProductForm() {
//   const [product, setProduct] = useState({
//     name: "",
//     price: "",
//     category: "",
//     description: "",
//   });

//   const [file, setFile] = useState(null); // ✅ for image file only
//   const [editId, setEditId] = useState(null);
//   const [productList, setProductList] = useState({});

//   const handleChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   async function add() {
//     let imageUrl = "";

//     if (file) {
//       // Upload to Firebase Storage
//       const imgRef = storageRef(storage, `product_images/${file.name}`);
//       await uploadBytes(imgRef, file);
//       imageUrl = await getDownloadURL(imgRef);
//       console.log(imageUrl);
      
//     }

//     const pathRef = push(ref(db, "products"));
//     await set(pathRef, {
//       ...product,
//       image: imageUrl,
//       time: new Date().toLocaleString(),
//     });

//     // Reset form
//     setProduct({
//       name: "",
//       price: "",
//       category: "",
//       description: "",
//     });
//     setFile(null);
//   }

//   function get_data() {
//     const pathRef = ref(db, "products");
//     onValue(pathRef, (res) => {
//       setProductList(res.val() || {});
//     });
//   }

//   function handleEdit(data, id) {
//     setProduct({
//       name: data.name,
//       price: data.price,
//       category: data.category,
//       description: data.description,
//     });
//     setFile(null); // you can't edit old file this way
//     setEditId(id);
//   }

//   async function handleUpdate() {
//     let imageUrl = productList[editId].image; // keep old URL

//     if (file) {
//       // If new file, upload and replace URL
//       const imgRef = storageRef(storage, `product_images/${file.name}`);
//       await uploadBytes(imgRef, file);
//       imageUrl = await getDownloadURL(imgRef);
//     }

//     const pathRef = ref(db, "products/" + editId);
//     await update(pathRef, {
//       ...product,
//       image: imageUrl,
//       time: new Date().toLocaleString(),
//     });

//     setProduct({
//       name: "",
//       price: "",
//       category: "",
//       description: "",
//     });
//     setFile(null);
//     setEditId(null);
//   }

//   function handleDelete(id) {
//     const pathRef = ref(db, "products/" + id);
//     remove(pathRef);
//   }

//   useEffect(() => {
//     get_data();
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>{editId ? "Update Product" : "Add Product"}</h2>
//       <input
//         type="text"
//         name="name"
//         value={product.name}
//         placeholder="Product Name"
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="number"
//         name="price"
//         value={product.price}
//         placeholder="Price"
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="file"
//         onChange={handleFileChange}
//       />
//       <br />
//       <input
//         type="text"
//         name="category"
//         value={product.category}
//         placeholder="Category"
//         onChange={handleChange}
//       />
//       <br />
//       <textarea
//         name="description"
//         value={product.description}
//         placeholder="Description"
//         onChange={handleChange}
//       />
//       <br />
//       {editId ? (
//         <button onClick={handleUpdate}>Update Product</button>
//       ) : (
//         <button onClick={add}>Add Product</button>
//       )}

//       <hr />
//       <h3>Product List</h3>
//       {Object.keys(productList).map((id) => (
//         <div
//           key={id}
//           style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}
//         >
//           {productList[id].image && (
//             <img
//               src={productList[id].image}
//               alt=""
//               style={{ width: "100px", height: "100px" }}
//             />
//           )}
//           <p><strong>{productList[id].name}</strong></p>
//           <p>₹ {productList[id].price}</p>
//           <p>Category: {productList[id].category}</p>
//           <p>{productList[id].description}</p>
//           <p><em>{productList[id].time}</em></p>
//           <button onClick={() => handleEdit(productList[id], id)}>Edit</button>
//           <button onClick={() => handleDelete(id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductForm;


import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { ref, push, set, onValue, remove, update } from "firebase/database";

// ✅ Import Uploadcare Widget
import { Widget } from "@uploadcare/react-widget";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "", // ✅ store image URL directly
  });

  const [editId, setEditId] = useState(null);
  const [productList, setProductList] = useState({});

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (fileInfo) => {
    // ✅ Uploadcare returns URL immediately
    setProduct({ ...product, image: fileInfo.cdnUrl });
  };

  async function add() {
    const pathRef = push(ref(db, "products"));
    await set(pathRef, {
      ...product,
      time: new Date().toLocaleString(),
    });

    // Reset form
    setProduct({
      name: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
  }

  function get_data() {
    const pathRef = ref(db, "products");
    onValue(pathRef, (res) => {
      setProductList(res.val() || {});
    });
  }

  function handleEdit(data, id) {
    setProduct({
      name: data.name,
      price: data.price,
      category: data.category,
      description: data.description,
      image: data.image || "",
    });
    setEditId(id);
  }

  async function handleUpdate() {
    const pathRef = ref(db, "products/" + editId);
    await update(pathRef, {
      ...product,
      time: new Date().toLocaleString(),
    });

    setProduct({
      name: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
    setEditId(null);
  }

  function handleDelete(id) {
    const pathRef = ref(db, "products/" + id);
    remove(pathRef);
  }

  useEffect(() => {
    get_data();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>{editId ? "Update Product" : "Add Product"}</h2>
      <input
        type="text"
        name="name"
        value={product.name}
        placeholder="Product Name"
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        name="price"
        value={product.price}
        placeholder="Price"
        onChange={handleChange}
      />
      <br />

      {/* ✅ Uploadcare widget */}
      <Widget
        publicKey="YOUR_UPLOADCARE_PUBLIC_KEY"
        onChange={handleImageUpload}
      />

      <br />
      <input
        type="text"
        name="category"
        value={product.category}
        placeholder="Category"
        onChange={handleChange}
      />
      <br />
      <textarea
        name="description"
        value={product.description}
        placeholder="Description"
        onChange={handleChange}
      />
      <br />
      {editId ? (
        <button onClick={handleUpdate}>Update Product</button>
      ) : (
        <button onClick={add}>Add Product</button>
      )}

      <hr />
      <h3>Product List</h3>
      {Object.keys(productList).map((id) => (
        <div
          key={id}
          style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}
        >
          {productList[id].image && (
            <img
              src={productList[id].image}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          )}
          <p><strong>{productList[id].name}</strong></p>
          <p>₹ {productList[id].price}</p>
          <p>Category: {productList[id].category}</p>
          <p>{productList[id].description}</p>
          <p><em>{productList[id].time}</em></p>
          <button onClick={() => handleEdit(productList[id], id)}>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductForm;

