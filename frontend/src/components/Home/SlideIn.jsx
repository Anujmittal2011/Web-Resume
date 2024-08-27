// SlideIn.js
import React from 'react';
import './SlideIn.css';

const SlideIn = ({ isOpen, content, handleClose }) => {
  return (
    <div className={`slide-in-container ${isOpen ? 'open' : ''}`}>
      <div className="slide-in-content">
        <button className="close-button" onClick={handleClose}>Close</button>
        {content}
      </div>
    </div>
  );
  
};

export default SlideIn;
