import React from 'react'
import './Button.css';

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button
      className={`${isGoogleSignIn ? "google-btn custom-btn" : "custom-btn"} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
  

export default Button;