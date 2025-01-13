// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComp';


function ParentComponent() {
    const [dataFromChild, setDataFromChild] = useState('');

    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    };

    return (
        <div>parent
            <p>Data from child: {dataFromChild}</p>
            <ChildComponent onData={handleDataFromChild} />
            
        </div>
    );
}


export default ParentComponent