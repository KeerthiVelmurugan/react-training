import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

function BootEvents() {
    const [checkboxes, setCheckboxes] = useState({
        checkbox1:false,
        checkbox2:false,
        checkbox3:false,
        checkbox4:false,
    });

    const handleMultipleCheckbox = (checkboxName) => {
    
        setCheckboxes({
            ...checkboxes,[checkboxName]:!checkboxes[checkboxName],
        });
       // setCheckboxes({...checkboxes,[checkboxName]:!checkboxes[checkboxName]})
    }
    const [selectedOption, setSelectedOption] = useState('male')

    const handleRadio =(e) => {
      setSelectedOption(e.target.value)
    }
  return (
    <div>
      <Form>
        <Container>
        <Form.Check
            type='checkbox'
            label='Testing'
            checked={checkboxes.checkbox1}
            onChange={() =>handleMultipleCheckbox('checkbox1')}
            />
            <Form.Check
            type='checkbox'
            label='Management'
            checked={checkboxes.checkbox2}
            onChange={() =>handleMultipleCheckbox('checkbox2')}
            />
            <Form.Check
            type='checkbox'
            label='Buisness Development'
            checked={checkboxes.checkbox3}
            onChange={() =>handleMultipleCheckbox('checkbox3')}
            />
            <Form.Check
            type='checkbox'
            label='developing'
            checked={checkboxes.checkbox4}
            onChange={() =>handleMultipleCheckbox('checkbox4')}
            />
            <Form.Check
            type='radio'
            label='male'
            name='male'
            value='male'
            checked={selectedOption==='male'}
            onChange={handleRadio}/>
            <Form.Check
            type='radio'
            label='female'
            name='female'
            value='female'
            checked={selectedOption==='female'}
            onChange={handleRadio}/>
            <Form.Check
            type='radio'
            label='others'
            name='others'
            value='others'
            checked={selectedOption==='others'}
            onChange={handleRadio}/>


            </Container>
      </Form>
    </div>
  )
}

export default BootEvents
