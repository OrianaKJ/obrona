import React from 'react';
import PropTypes from 'prop-types';
import './LoadMore.css';

const LoadMoreBtn = ({ text, onClick }) => (
  <div className="loadmore-btn" onClick={onClick}>
    <p>{text}</p>
  </div>
)
LoadMoreBtn.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default LoadMoreBtn;