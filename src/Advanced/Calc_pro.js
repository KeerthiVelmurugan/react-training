import React from 'react'
import { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, Row } from 'react-bootstrap'

function Calcapp() {
    const [result,setResult] = useState("");


    const handleClick = (e) => {
        setResult(result.concat(e.target.value));
    }


  

    const handleClear = (e) =>{
        setResult("")
    }

    const handleBackspace = () =>
    {
        setResult(result.slice(0,- 1));
    }
    // const handleAddition = () => {
    //     setResult((prev) => prev+'+');
    //     console.log(setResult)

    // }

    // const handleSubtraction = () => {
    //     setResult((prev) => prev+'-')
    // }

    // const handleMultipy = () => {
    //     setResult((prev) => prev+ '*')
    // }

    // const handleDivision = () => {

    //     setResult((prev) => prev+'/')
    // }
   
    const CalcResult = (e) => {


        const operators = result.split(/[\+\-\*\/]/);
        console.log(operators)
        let operator;
    if (result.includes('+')) {
      operator = '+';
    } else if (result.includes('-')) {
      operator = '-';
      console.log(operator);
    } else if (result.includes('*')) {
      operator = '*';
    } else if (result.includes('/')) {
        operator = '/';
    }

   let res;
   switch(operator)

{
    case '+':
        res=operators.reduce((a,b)=>a+parseFloat(b),0);
        break;
        case '-':
            res = operators.reduce((a, b, index) =>
              index === 0 ? parseFloat(b) : a - parseFloat(b), 0);
           // result = operators.reduce((a, b) => a - parseFloat(b), 0);
            break;
          case '*':
            res = operators.reduce((a, b) => a * parseFloat(b), 1);
            break;
          case '/':
            res = operators.reduce((a, b, index) =>
              index === 0 ? parseFloat(b) : a / parseFloat(b), 1);
            break;
    // case '-':
    //     res= operators.reduce((a,b) =>a-parseFloat(b),0);
    //     console.log(res)
    //     break;
    // case '*':
    //     res=operators.reduce((a,b) => a*parseFloat(b),0);
    //     break;
    // case '/':
    //     res=operators.reduce((a,b) => a/parseFloat(b),0);
    //     break;
    default:
            return 0;
}
setResult(res)
    }
    // const handleClick = (buttonvalue) => {
    //     switch(buttonvalue){
    //         case '+':
    //            handleAddition();
    //            break;
    //         case '-':
    //             handleSubtraction();
    //             break;
    //         case '*':
    //                 handleMultipy();
    //                 break;
    //         case '/':
    //                     handleDivision();
    //                     break;

    //         case '=':
    //                 CalcResult();
    //                 break;
    //             default:
    //                 setResult((prev) => prev+buttonvalue);
    //                 console.log(setResult)
    //                 break;
    //     }

     
    

  return (
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
                <Form.Control  type="text" value={result} />
                            </Form.Group>
                            <br/>
                    <Button value="7" size='lg' variant='secondary' onClick= { handleClick}>7</Button>
                    &nbsp;
 
                   <Button value='8' size='lg' variant='secondary' onClick= { handleClick}>8</Button>
                   &nbsp;
                    <Button value='9' size='lg' variant='secondary' onClick= {handleClick}>9</Button>
                    &nbsp;
                    <Button value='/'  size='lg' variant='warning' onClick= {handleClick}>&divide;</Button>
                    <br/>
                    <br/>
                    <Button value='4' size='lg' variant='secondary' onClick= { handleClick}>4</Button>
                    &nbsp;
                    <Button value='5' size='lg' variant='secondary' onClick= { handleClick}>5</Button>
                    &nbsp;
                    <Button  value='6'size='lg' variant='secondary' onClick= { handleClick}>6</Button>
                    &nbsp;
                    <Button value='*' size='lg' variant='warning' onClick= { handleClick}>X</Button>
                    <br/>
                    <br/>
                    <Button value='1' size='lg' variant='secondary' onClick= {handleClick}>1</Button>
                    &nbsp;
                    <Button value='2' size='lg' variant='secondary' onClick= { handleClick}>2</Button>
                    &nbsp;
                    <Button value='3' size='lg' variant='secondary' onClick= { handleClick}>3</Button>
                    &nbsp;
                    <Button value='+' id='+' size='lg' variant='warning' onClick= {handleClick}>+</Button>
                    <br/><br/>
                    <Button value='0' size='lg' variant='secondary' onClick= {handleClick}>0</Button>
                    &nbsp;
                    <Button value='.' size='lg' variant='secondary' onClick= {handleClick}>.</Button>
                    &nbsp;
                    <Button  value='=' size='lg' variant='success' onClick= {CalcResult}>=</Button>
                    &nbsp;
                    <Button value='-' size='lg' variant='warning' onClick= {handleClick}>&ndash;</Button>

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
  )
}

export default Calcapp;
