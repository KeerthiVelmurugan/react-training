// // import React, { useState } from 'react'
// // import axios from 'axios'


// // function FormForPost() {
// //     const [products, setProducts] = useState({
// //     productName:"",
// //     code:"",
// //     price:""
// //     })

// //     function handleChange(e){
// //         setProducts({...products,[e.target.name]:e.target.value})
// //     }


// //     function handleSubmit(e){
// //         e.preventDefault()
// //         let details = {
// //             product_name:products.productName,
// //             code:products.code,
// //             price:Number(products.price)

// //         }
// //         axios.post('http://127.0.0.1:8000/inventory/products/add/',details)
// //         alert("saved")

// //     }
// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <input type='text' name='productName' onChange={handleChange}/>
// //         <input type='text' name='code' onChange={handleChange}/>
// //         <input type='text' name='price' onChange={handleChange}/>
// //         <button type='submit' >save</button>

// //       </form>
// //     </div>
// //   )
// // }

// // export default FormForPost



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function FormForPost() {
//   const [products, setProducts] = useState({
//     productName: "",
//     code: "",
//     price: ""
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   function handleChange(e) {
//     setProducts({ ...products, [e.target.name]: e.target.value });
//   }
//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/inventory/products/")
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error making the request:", error);
//       });
//   }, []);
  

//   function handleSubmit(e) {
//     e.preventDefault();

//     // Simple validation
//     if (!products.productName || !products.code || !products.price) {
//       alert("All fields are required");
//       return;
//     }

//     let details = {
//       product_name: products.productName,
//       code: products.code,
//       price: Number(products.price),
//       category_reference_id:2
//     };

//     setLoading(true);
//     setError(null);
//     setSuccess(false);

//     axios.post('http://127.0.0.1:8000/inventory/products/', details)
//       .then(() => {
//         setSuccess(true);
//         setProducts({
//           productName: "",
//           code: "",
//           price: "",
//           category_reference_id:2
//         });
//       })
//       .catch((error) => {
//         setError("Failed to save product");
//         console.error(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type='text' 
//           name='productName' 
//           placeholder='Product Name'
//           value={products.productName} 
//           onChange={handleChange} 
//         />
//         <input 
//           type='text' 
//           name='code' 
//           placeholder='Code'
//           value={products.code} 
//           onChange={handleChange} 
//         />
//         <input 
//           type='text' 
//           name='price' 
//           placeholder='Price'
//           value={products.price} 
//           onChange={handleChange} 
//         />
//         <select>
//           <option value="2">books</option>
//         </select>
//         <button type='submit' disabled={loading}>
//           {loading ? 'Saving...' : 'Save'}
//         </button>
//       </form>

//       {success && <p>Product saved successfully!</p>}
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default FormForPost;




// import React, { useState } from 'react'
// import axios from 'axios'


// function FormForPost() {
//     const [products, setProducts] = useState({
//     productName:"",
//     code:"",
//     price:""
//     })

//     function handleChange(e){
//         setProducts({...products,[e.target.name]:e.target.value})
//     }


//     function handleSubmit(e){
//         e.preventDefault()
//         let details = {
//             product_name:products.productName,
//             code:products.code,
//             price:Number(products.price)

//         }
//         axios.post('http://127.0.0.1:8000/inventory/products/add/',details)
//         alert("saved")

//     }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type='text' name='productName' onChange={handleChange}/>
//         <input type='text' name='code' onChange={handleChange}/>
//         <input type='text' name='price' onChange={handleChange}/>
//         <button type='submit' >save</button>

//       </form>
//     </div>
//   )
// }

// export default FormForPost



import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FormForPost() {
  const [products, setProducts] = useState({
    productName: "",
    code: "",
    price: ""
  });
  const [students, setStudents] = useState([])

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setProducts({ ...products, [e.target.name]: e.target.value });
  }

  function fetchStudents(){
    axios.get("http://127.0.0.1:8000/students/list/")
      .then((response) => {
        console.log(response.data);
        setStudents(response.data)
      })
      .catch((error) => {
        console.error("There was an error making the request:", error);
      });

  }
  useEffect(() => {
    fetchStudents()
  }, []);
  

  function handleSubmit(e) {
    e.preventDefault();

    // Simple validation
    if (!products.productName || !products.code || !products.price) {
      alert("All fields are required");
      return;
    }

    let details = {
      name: products.productName,
      age: products.code,
      marks: Number(products.price),
     // category_reference_id:2
    };

    setLoading(true);
    setError(null);
    setSuccess(false);

    axios.post('http://127.0.0.1:8000/students/list/', details)
      .then(() => {
        setSuccess(true);
        setProducts({
          productName: "",
          code: "",
          price: "",
         // category_reference_id:2
        });
      })
      .catch((error) => {
        setError("Failed to save product");
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
      fetchStudents()
  }

  function handleDelete(id){
    console.log(id)
    axios.delete(`http://127.0.0.1:8000/students/${id}`)
    alert("deleted")
    fetchStudents()

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='productName' 
          placeholder='Product Name'
          value={products.productName} 
          onChange={handleChange} 
        />
        <input 
          type='text' 
          name='code' 
          placeholder='Code'
          value={products.code} 
          onChange={handleChange} 
        />
        <input 
          type='text' 
          name='price' 
          placeholder='Price'
          value={products.price} 
          onChange={handleChange} 
        />
        <select>
          <option value="2">books</option>
        </select>
        <button type='submit' disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>

      {success && <p>Product saved successfully!</p>}
      {error && <p>{error}</p>}
      {students && students.map((i,index) => (
        <div key={i.id}>
          <li>{i.name}</li>
          <li>{i.age}</li>
          <li>{i.marks}</li>
          <button onClick={()=>{handleDelete(i.id)}}>delete</button>
          </div>
      ))}
    </div>
  );
}

export default FormForPost;

