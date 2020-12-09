import React from 'react';

import './FormInput.css';

const FormInput = ({handleChange, ...otherProps}) => (
    <div className="elements">
      <input className='form-input' onChange={handleChange} {...otherProps} />
    </div>
)

export default FormInput;