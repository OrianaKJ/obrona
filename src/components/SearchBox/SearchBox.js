import React from 'react';
import './SearchBox.css';

export const SearchBox = ( { placeholder, handleChange }) => (
    
    <div className="search">
        <input 
            className="input"
            type="search" 
            placeholder={placeholder}
            onChange={handleChange}
        />
    </div>
)

