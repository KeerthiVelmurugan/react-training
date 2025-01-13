import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { solarizedTheme } from './Theme';
import {v4 as uuid} from 'uuid';
import axios from 'axios';

function DummyJsonCRUD() {

    const [records,setRecords] = useState([]);
    const [inputs, setInputs] = useState({
        title:"",
        price:"",
        brand:"",
        thumbnail:""
    });
    const column = [
        {
            name:'ID',
            selector:(row) =>row.id,
            sortable:'true',
            
        },
        {
            name:'Title',
            selector:(row) => row.title,
            sortable:'true',
        },
        {
            name:'Price',
            selector:(row) => row.price,
            sortable:'true',
        },
        {
          name:'thumbnail',
          cell:(row) => (
              <div >
                  <img src={row.thumbnail} alt='thumbnail' style={{height:'50px',width:'80px'}}></img>
              </div>
          )
        //  selector:(row) => row.thumbnail,
          //sortable:'true',
      },
        {
            name:'Actions',
            cell:(row) => (
                <div>
                    <Button onClick={()=>{handleEdit(row)}}>Edit</Button>
                    <Button>Delete</Button>
                </div>
            )
        }
    ];

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => {
            setRecords(res.products)
        });
    },[])
    const handleinputs = (e) => {
        setInputs({...inputs,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const id =uuid();
        // let uid = id.slice(0,4);
        const products = {
           // id:uid,
            title:inputs.title,
            price:inputs.price,
        };
        alert('new pro added')
        setRecords([...records,products]);
    }

    const handleEdit = (details)=> {
      let data = details
      setInputs({
        title:data.title,
        price:data.price,
        brand:data.brand,
        thumbnail:data.thumbnail

      })
    }




  return (
    <div>
        <div>
        <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Control
              type="text"
              placeholder="Enter Title"
              name="title"
              value={inputs.title}
              
              onChange={(e) => handleinputs(e)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Control
              type="text"
              placeholder="Enter Price"
              name="price"
              value={inputs.price}
            
              onChange={(e) => handleinputs(e)}
            ></Form.Control>
          </Form.Group>
          <Button variant='success' type='submit' onClick={(e) => handleSubmit(e)}>Add</Button>
          </Form>
        
        </div>
        <div   >
        <DataTable 
        columns={column}
        data={records}
        selectableRows
        fixedHeader
        pagination
        selectableRowsHighlight
        highlightOnHover
        paginationPerPage={10}
        paginationRowsPerPageOptions={[5,10,20]}
        theme={solarizedTheme}
        >

        </DataTable>
        </div>
      
    </div>
  )
}

export default DummyJsonCRUD
