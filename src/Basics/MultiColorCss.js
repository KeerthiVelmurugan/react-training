import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

function MultiColorCss() {
  const [data, setData] = useState([]);
  const [name, setName] = useState(
    {
      name: ""
    }
  );

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(res => {
        const tags = res.products.map((temp) => temp.tags).flat()
        setData(tags)
      })
      .catch(error => { console.log(error) });

    //..................................to check the data without .json():.............................................    
    // fetch('https://fakestoreapi.com/products')

    // // .then(res => console.log("Fetched Data:", res))
    // .then(data => data.json())
    // .then(data => {
    //   console.log("Fetched Data:", data); // Log the fetched data
    //   setData(data); // Set the data to state
    // })

    //..................................post method using fetch:.............................................

    // const url = "http://localhost:4000/city/create";
    // const body = { 
    //   "cityName":"Tiruppur11",
    //   "createdBy":"1" };

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json" // Specify the content type as JSON
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }, [name]);

  let Colors = ["blue", "green", "red", "yellow", "orange"];
  // const generateColor = (index) => {
  //   const baseColor = 0x333333; // starting color to add randomness
  //   const colorOffset = index * 121212; // change multiplier for variety
  //   const color = (baseColor + colorOffset).toString(16).slice(-6); // convert to hex
  //   return `#${color.padStart(6, '0')}`; // ensure 6 characters with padding if necessary
  // };
  const generateColor = (index) => {
    const hue = (index * 45) % 360; // Rotate hue for each index to get a different color
    const saturation = 70; // High saturation for vibrant colors
    const lightness = 60; // Medium lightness for better readability
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };
  return (
    <div>
      <h1>Fetched Data</h1>
      <label>Name</label>
      <input type='text' name='name' value={name.name}
        onChange={(e) => setName((prev) => ({ ...prev, name: e.target.value }))}>
      </input>
      {/* <div className="card-container">
        {data.map(item => (
          <div className="card" key={item.index}>{item}</div>
        ))}
      </div> */}
      <Container>
        <Row>
          {data.map((item, index) => (
            <Col xs={12} md={3}>
              {/* <Card key={index} style={{ backgroundColor: Colors[index % Colors.length] }}> */}
              <Card key={index} style={{ backgroundColor: generateColor(index) }}>
                {item}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MultiColorCss;