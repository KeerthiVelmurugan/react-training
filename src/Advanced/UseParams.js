// src/components/User.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

function UserUseParams() {
    let { id } = useParams();
    let userId = '1234'

    return (
        <div>
            <h1>User ID: {id}</h1>
            <Link to = {`/AnotherDisplay/${userId}`}>
                    
                        <button>click</button>
                    </Link>

        </div>
    );
}

export default UserUseParams;
