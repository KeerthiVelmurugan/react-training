import React, { useState } from 'react';

const PasswordField = () => {
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div style={{ position: 'relative', width: '200px' }}>
            <input
                type={isPasswordVisible ? 'text' : 'password'}
                value={password}
                onChange={handleChange}
                placeholder="Enter password"
                style={{ paddingRight: '30px' }}
                
            />
            <button
                onClick={togglePasswordVisibility}
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '5px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                👁️
            </button>
        </div>
    );
};

export default PasswordField;
