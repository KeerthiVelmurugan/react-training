import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, Row } from 'react-bootstrap'


function Calcpro() {

    const [display, setDisplay] = useState("");
    const [result,setResult] = useState("");

    const handleClick =(e) => {
        const targetValue = e.target.name;
        setDisplay(display + targetValue);
      }
const operatorClick = (operator) =>
{
    let lastChar = display.slice(-2);
    let operatorArr = ["+","-","*","/"];

    console.log(lastChar);
    if(display === "" || operatorArr.includes(lastChar))
    return;
setDisplay((prevDisplay)=> {
    return prevDisplay + " " +operator + " ";
});
}
const handleEqual = (e) => {

    if(display.slice(-2).includes("+","-","*","/"))
    return;
setDisplay("");
try{
    const resultValue = calculate(display);
    setDisplay(resultValue);

} catch(error){
    setDisplay("Error");
}
}

const calculate = (expression)=>{

    const tokens = expression.split(" ");
    console.log(tokens)
    let resultValue = parseInt(tokens[0]);

    for(let i=1; i<tokens.length; i+=2){

        const operator=tokens[i];
        const nextnum = parseInt(tokens[i+1]);
 
        switch(operator){

            case '+':
                resultValue +=nextnum;
                break;
            case '-':
                resultValue -= nextnum;
                break;
            case '*':
                resultValue *=nextnum;
                break;
            case '/':
                resultValue /=nextnum;
                break;
            default:
                resultValue = "Error";

        }
    }
    return resultValue;
}

const handleClear = (e) =>{
    setDisplay("");
    setResult("");
}

const handleBackspace = (e) => {
    setDisplay(display.slice(0,-1));
}


  return (
    <div>
      <div className='d-grid gap-2'  >
        <Container  className='mt-4' >
            <Row>
                <Col xs={3}>
            <Card>
                <CardHeader className='p-2' style={ {backgroundcolor:"grey"}} >
                   <h4>CALCULATOR</h4> 
                   </CardHeader>
                
                
                   <CardBody>
                <Form.Group className='mb-2'>
                
                <Form.Control  type="text" value= {display} />
                
                <Form.Control type='text' value={result} />

                            </Form.Group>
                            <br/>
                
                    <Button value={7} name={7} size='lg' variant='secondary' onClick= { handleClick}>7</Button>
                    &nbsp;
 
                   <Button value={8} name={8} size='lg' variant='secondary' onClick= { handleClick}>8</Button>
                   &nbsp;
                    <Button value={9} name={9} size='lg' variant='secondary' onClick= {handleClick}>9</Button>
                    &nbsp;
                    <Button value={"/"}  name= {"/"}size='lg' variant='warning' onClick={handleClick => operatorClick('/')}>/</Button>
                    <br/>
                    <br/>
                    <Button value={4} name= {4} size='lg' variant='secondary' onClick= { handleClick}>4</Button>
                    &nbsp;
                    <Button value={5} name= {5} size='lg' variant='secondary' onClick= { handleClick}>5</Button>
                    &nbsp;
                    <Button  value={6} name={6} size='lg' variant='secondary' onClick= { handleClick}>6</Button>
                    &nbsp;
                    <Button value={'*'} name={'*'} size='lg' variant='warning' onClick= {handleClick => operatorClick('*')}>*</Button>
                    <br/>
                    <br/>
                    <Button value={1} name={1}   size='lg' variant='secondary' onClick= {handleClick}>1</Button>
                    &nbsp;
                    <Button value={2} name={2}  size='lg' variant='secondary' onClick= { handleClick}>2</Button>
                    &nbsp;
                    <Button value={3} name={3}   size='lg' variant='secondary' onClick= { handleClick}>3</Button>
                    &nbsp;
                    <Button value={'+'} name={'+'} size='lg' variant='warning' onClick= {handleClick => operatorClick('+')}>+</Button>
                    <br/><br/>
                    <Button value={0} name={0}  size='lg' variant='secondary' onClick= {handleClick}>0</Button>
                    &nbsp;
                    <Button value={'.'} name={'.'} size='lg' variant='secondary' onClick= {handleClick}>.</Button>
                    &nbsp;
                    <Button  value={'='} name={'='} size='lg' variant='success' onClick=  {handleClick => handleEqual('=')}>=</Button>
                    &nbsp;
                    <Button value={'-'} name={'-'} size='lg' variant='warning' onClick= {handleClick => operatorClick('-')}>-</Button>

                    <br/><br />
                    <Button  value='clear'  variant='primary' onClick={handleClear}>Clear</Button>
                    &nbsp;
                    <Button value= 'c' variant='primary' onClick={handleBackspace}>C</Button>

                </CardBody>

            </Card>
            </Col>
            </Row>
        </Container>
      
    </div>
  
    </div>
  )
}

export default Calcpro
